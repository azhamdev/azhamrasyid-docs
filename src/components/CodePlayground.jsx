import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CodeEditor from './CodeEditor.jsx';
import Inline from './Inline.jsx';
import { run } from '../lib/runner.js';
import { BulbIcon, CheckIcon, CloseIcon, PlayIcon, RefreshIcon } from './icons.jsx';
import './CodePlayground.css';

const STORAGE_KEY = 'practice-code';

function readSaved(id) {
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return typeof all[id] === 'string' ? all[id] : null;
  } catch {
    return null;
  }
}

function writeSaved(id, code) {
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    all[id] = code;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    /* mode privat — kode cukup hidup selama sesi ini */
  }
}

function clearSaved(id) {
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    delete all[id];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    /* abaikan */
  }
}

const fmt = (v) => (typeof v === 'string' ? JSON.stringify(v) : JSON.stringify(v));

/**
 * Arena uji sebuah soal algoritma: editor, tombol Jalankan, keluaran console,
 * dan hasil tiap kasus uji. Kode tersimpan otomatis per soal di peramban.
 * Saat semua uji lulus, soal ditandai selesai lewat `onAllPass`.
 */
export default function CodePlayground({ exercise, onAllPass }) {
  const [code, setCode] = useState(() => readSaved(exercise.id) ?? exercise.starter);
  const [running, setRunning] = useState(false);
  const [outcome, setOutcome] = useState(null); // { logs, results, error, timedOut }
  const savedTimer = useRef(null);

  // Simpan kode dengan jeda singkat supaya tidak menulis di tiap ketukan.
  // Hanya kode yang benar-benar diketik siswa yang disimpan — starter yang
  // belum disentuh tidak, supaya perubahan `starter` di config tetap sampai.
  const touched = useRef(false);
  useEffect(() => {
    if (!touched.current) return undefined;
    clearTimeout(savedTimer.current);
    savedTimer.current = setTimeout(() => writeSaved(exercise.id, code), 400);
    return () => clearTimeout(savedTimer.current);
  }, [code, exercise.id]);

  const handleChange = (next) => {
    touched.current = true;
    setCode(next);
  };

  const allPass =
    outcome &&
    !outcome.error &&
    outcome.results.length > 0 &&
    outcome.results.every((r) => r.pass);

  const handleRun = useCallback(async () => {
    if (running) return;
    setRunning(true);
    const result = await run(code, {
      functionName: exercise.functionName,
      tests: exercise.tests,
    });
    setRunning(false);
    setOutcome(result);
    const passedAll =
      !result.error &&
      result.results.length > 0 &&
      result.results.every((r) => r.pass);
    if (passedAll) onAllPass?.();
  }, [code, running, exercise, onAllPass]);

  const handleReset = () => {
    clearTimeout(savedTimer.current);
    touched.current = false; // jangan simpan ulang starter yang baru dipasang
    clearSaved(exercise.id);
    setCode(exercise.starter);
    setOutcome(null);
  };

  const passCount = outcome?.results.filter((r) => r.pass).length ?? 0;

  return (
    <div className="pg">
      <div className="pg-head">
        <span className="pg-label">
          Tulis fungsi <code>{exercise.functionName}</code> · JavaScript
        </span>
        <div className="pg-actions">
          <button type="button" className="pg-reset" onClick={handleReset}>
            <RefreshIcon />
            Reset kode
          </button>
          <button
            type="button"
            className="pg-run"
            onClick={handleRun}
            disabled={running}
          >
            <PlayIcon />
            {running ? 'Menjalankan…' : 'Jalankan'}
            <span className="pg-run-kbd">⌘↵</span>
          </button>
        </div>
      </div>

      <CodeEditor
        value={code}
        onChange={handleChange}
        onRun={handleRun}
        ariaLabel={`Editor kode untuk soal ${exercise.title}`}
      />

      <AnimatePresence initial={false}>
        {outcome && (
          <motion.div
            className="pg-out"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pg-out-inner">
              {outcome.error && <p className="pg-error">{outcome.error}</p>}

              {!outcome.error && (
                <>
                  <p className={`pg-summary${allPass ? ' is-pass' : ''}`}>
                    {allPass
                      ? '✓ Semua uji lulus — soal ditandai selesai. Kerja bagus!'
                      : `${passCount} dari ${outcome.results.length} uji lulus`}
                  </p>

                  <ul className="pg-tests">
                    {outcome.results.map((r, i) => {
                      const t = exercise.tests[i];
                      return (
                        <li key={i} className={r.pass ? 'is-pass' : 'is-fail'}>
                          <div className="pg-test-row">
                            <span className="pg-test-mark">
                              {r.pass ? <CheckIcon /> : <CloseIcon width={14} height={14} />}
                            </span>
                            <code className="pg-test-call">
                              {exercise.functionName}({t.args.map(fmt).join(', ')})
                            </code>
                            <span className="pg-test-want">
                              {r.pass ? (
                                <>→ {fmt(t.expected)}</>
                              ) : r.threw ? (
                                <>galat: {r.threw}</>
                              ) : (
                                <>
                                  hasil {r.got ?? 'undefined'}, harusnya {fmt(t.expected)}
                                </>
                              )}
                            </span>
                          </div>

                          {/* Petunjuk spesifik kasus ini — hanya saat gagal,
                              supaya siswa tetap mencoba sendiri dulu. */}
                          {!r.pass && t.hint && (
                            <p className="pg-test-hint">
                              <BulbIcon width={13} height={13} />
                              <span>
                                <Inline text={t.hint} />
                              </span>
                            </p>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}

              {outcome.logs.length > 0 && (
                <div className="pg-console">
                  <span className="pg-console-label">console</span>
                  <pre>{outcome.logs.join('\n')}</pre>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
