/* ============================================================================
   Sandbox untuk menjalankan kode siswa.

   Kode dijalankan di dalam Web Worker — thread terpisah tanpa akses ke DOM,
   localStorage, maupun halaman ini. Kalau kode siswa berputar tanpa henti
   (infinite loop), worker-nya kita matikan lewat timeout; halaman tetap hidup.

   Alur: run(code, { functionName, tests })
     → worker mengeksekusi kode, menangkap console.log,
       memanggil fungsi siswa untuk tiap kasus uji, membandingkan hasilnya
     → resolve { logs, results, error, timedOut }
   ========================================================================== */

const TIMEOUT_MS = 3000;

/* Sumber worker sebagai teks — dibuat jadi Blob URL supaya tidak butuh file
   terpisah ataupun konfigurasi bundler tambahan. */
const WORKER_SOURCE = `
  const fmt = (v) => {
    if (typeof v === 'string') return v;
    if (typeof v === 'function') return '[fungsi]';
    if (v === undefined) return 'undefined';
    try { return JSON.stringify(v); } catch { return String(v); }
  };

  // Perbandingan mendalam yang cukup untuk soal algoritma:
  // angka, string, boolean, array, dan objek polos.
  const sama = (a, b) => {
    if (Object.is(a, b)) return true;
    if (typeof a !== typeof b) return false;
    if (Array.isArray(a) && Array.isArray(b)) {
      return a.length === b.length && a.every((x, i) => sama(x, b[i]));
    }
    if (a && b && typeof a === 'object' && !Array.isArray(a) && !Array.isArray(b)) {
      const ka = Object.keys(a), kb = Object.keys(b);
      return ka.length === kb.length && ka.every((k) => sama(a[k], b[k]));
    }
    return false;
  };

  self.onmessage = (e) => {
    const { code, functionName, tests } = e.data;
    const logs = [];
    ['log', 'info', 'warn', 'error'].forEach((m) => {
      console[m] = (...args) => {
        if (logs.length < 200) logs.push(args.map(fmt).join(' '));
      };
    });

    let error = null;
    let results = [];
    try {
      // Jalankan kode siswa, lalu ambil fungsi yang diminta soal.
      const fn = new Function(
        code + '\\n;try { return ' + functionName + '; } catch { return undefined; }'
      )();

      if (typeof fn !== 'function') {
        error = 'Fungsi "' + functionName + '" tidak ditemukan. ' +
          'Pastikan namanya persis sama dan dideklarasikan dengan kata kunci function.';
      } else {
        results = tests.map((t) => {
          try {
            const got = fn(...t.args);
            return { pass: sama(got, t.expected), got: fmt(got) };
          } catch (err) {
            return { pass: false, got: null, threw: String(err && err.message || err) };
          }
        });
      }
    } catch (err) {
      error = String(err && err.message || err);
    }

    postMessage({ logs, results, error });
  };
`;

/**
 * Menjalankan kode siswa terhadap kasus uji sebuah soal.
 *
 * @param {string} code           kode dari editor
 * @param {{ functionName: string, tests: {args: any[], expected: any}[] }} spec
 * @returns {Promise<{logs: string[], results: object[], error: string|null, timedOut: boolean}>}
 */
export function run(code, { functionName, tests }) {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(
      new Blob([WORKER_SOURCE], { type: 'application/javascript' }),
    );
    const worker = new Worker(url);

    const finish = (payload) => {
      clearTimeout(timer);
      worker.terminate();
      URL.revokeObjectURL(url);
      resolve(payload);
    };

    const timer = setTimeout(() => {
      finish({
        logs: [],
        results: [],
        error:
          `Kode dihentikan setelah ${TIMEOUT_MS / 1000} detik. ` +
          'Kemungkinan ada perulangan yang tidak pernah berhenti — periksa kondisi loop-mu.',
        timedOut: true,
      });
    }, TIMEOUT_MS);

    worker.onmessage = (e) => finish({ ...e.data, timedOut: false });
    worker.onerror = (e) => {
      e.preventDefault();
      finish({ logs: [], results: [], error: e.message || 'Kode gagal dijalankan.', timedOut: false });
    };

    // Kirim salinan polos agar aman untuk structured clone.
    worker.postMessage(JSON.parse(JSON.stringify({ code, functionName, tests })));
  });
}
