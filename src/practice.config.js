/* ============================================================================
   THE ONE FILE YOU EDIT TO MANAGE CODING PRACTICE.

   Struktur:
   - `practiceSets` : daftar topik latihan (urutannya = urutan di halaman).
   - Setiap topik berisi `exercises`, dan setiap soal punya:
       id        — unik di seluruh situs (dipakai menyimpan progres di browser)
       title     — judul singkat soal
       level     — 'Dasar' | 'Menengah' | 'Lanjut'
       question  — SOAL: apa yang harus dibuat siswa
       ideas     — IDE PENGERJAAN: petunjuk cara menulis kodenya (bukan jawaban)
       starter   — (opsional) kode awal untuk memulai
       lang      — (opsional) bahasa kode `starter`, untuk label & warna sintaks

   SOAL ALGORITMA (bisa dijalankan di editor) menambah dua kolom:
       functionName — nama fungsi yang harus ditulis siswa (JavaScript)
       tests        — kasus uji:
                      [{ args: [input...], expected: hasil, hint: '...' }, ...]
                      `hint` (opsional) = petunjuk khusus kasus itu, hanya
                      muncul ketika kasus tersebut GAGAL.
   Bila `tests` ada, kartu soal otomatis menampilkan editor kode + tombol
   Jalankan; `starter` menjadi isi awal editornya. Lulus semua uji = soal
   otomatis ditandai selesai.

   Teks di `question` dan `ideas` mendukung `kode inline` dengan tanda backtick.
   ========================================================================== */

export const practiceSets = [
  {
    topic: 'Algoritma',
    summary:
      'Soal yang bisa langsung dikerjakan di editor: tulis fungsinya, tekan Jalankan, dan lihat hasil ujinya.',
    docSlug: 'javascript-dasar',
    exercises: [
      {
        id: 'algo-jumlah-genap',
        title: 'Jumlah Bilangan Genap',
        level: 'Dasar',
        question:
          'Tulis fungsi `jumlahGenap(angka)` yang menerima sebuah array angka dan mengembalikan jumlah semua bilangan genapnya. Contoh: `jumlahGenap([1, 2, 3, 4])` menghasilkan `6`.',
        ideas: [
          'Siapkan variabel penampung, misal `let total = 0`.',
          'Telusuri array dengan `for` atau `for...of`.',
          'Bilangan genap dikenali dari sisa bagi: `n % 2 === 0`.',
          'Tambahkan ke penampung hanya jika genap, lalu kembalikan penampungnya.',
        ],
        functionName: 'jumlahGenap',
        starter: `function jumlahGenap(angka) {
  // tulis kodemu di sini
}`,
        tests: [
          {
            args: [[1, 2, 3, 4]],
            expected: 6,
            hint: 'Campuran ganjil dan genap — hanya 2 dan 4 yang boleh ikut dijumlahkan.',
          },
          {
            args: [[2, 4, 6]],
            expected: 12,
            hint: 'Semua elemen genap, jadi seluruh isi array ikut dijumlah. Pastikan loop-mu menyentuh setiap elemen.',
          },
          {
            args: [[1, 3, 5]],
            expected: 0,
            hint: 'Tidak ada yang genap — penampung harus tetap di nilai awalnya, `0`.',
          },
          {
            args: [[]],
            expected: 0,
            hint: 'Array kosong: perulangan tidak berjalan sama sekali. Yang dikembalikan adalah nilai awal penampungmu.',
          },
          {
            args: [[-2, 7, 10]],
            expected: 8,
            hint: 'Angka negatif juga bisa genap: `-2 % 2 === 0`. Jangan menyaring angka negatif.',
          },
        ],
      },
      {
        id: 'algo-balik-kata',
        title: 'Membalik Kata',
        level: 'Dasar',
        question:
          'Tulis fungsi `balikKata(kata)` yang mengembalikan kebalikan sebuah string. Contoh: `balikKata("koding")` menghasilkan `"gnidok"`.',
        ideas: [
          'Cara manual: telusuri string dari huruf terakhir ke huruf pertama sambil menyusun string baru.',
          'String bisa diakses per huruf dengan `kata[i]`, dan panjangnya `kata.length`.',
          'Cara singkat: pecah jadi array huruf dengan `split("")`, balik dengan `reverse()`, satukan lagi dengan `join("")`.',
          'Coba dua-duanya — yang manual melatih logika perulanganmu.',
        ],
        functionName: 'balikKata',
        starter: `function balikKata(kata) {
  // tulis kodemu di sini
}`,
        tests: [
          {
            args: ['koding'],
            expected: 'gnidok',
            hint: 'Telusuri dari indeks terakhir (`kata.length - 1`) mundur ke 0 sambil menyusun string baru.',
          },
          {
            args: ['a'],
            expected: 'a',
            hint: 'Satu huruf dibalik ya dirinya sendiri — pastikan indeks awal dan akhir loop-mu tidak keliru satu.',
          },
          {
            args: [''],
            expected: '',
            hint: 'String kosong harus menghasilkan string kosong, bukan `undefined`. Mulailah dari `let hasil = ""`.',
          },
          {
            args: ['halo dunia'],
            expected: 'ainud olah',
            hint: 'Spasi ikut dibalik seperti huruf biasa — jangan dibuang atau dilewati.',
          },
        ],
      },
      {
        id: 'algo-nilai-terbesar',
        title: 'Mencari Nilai Terbesar',
        level: 'Dasar',
        question:
          'Tulis fungsi `nilaiTerbesar(daftar)` yang mengembalikan angka terbesar dari sebuah array, tanpa memakai `Math.max`. Bila array kosong, kembalikan `null`.',
        ideas: [
          'Tangani kasus kosong lebih dulu: `if (daftar.length === 0) return null`.',
          'Anggap elemen pertama sebagai juara sementara.',
          'Bandingkan juara sementara dengan tiap elemen berikutnya; ganti bila ada yang lebih besar.',
          'Hati-hati dengan angka negatif — jangan memulai juara dari 0.',
        ],
        functionName: 'nilaiTerbesar',
        starter: `function nilaiTerbesar(daftar) {
  // tulis kodemu di sini
}`,
        tests: [
          {
            args: [[3, 9, 4]],
            expected: 9,
            hint: 'Bandingkan juara sementara dengan tiap elemen; ganti hanya bila menemukan yang lebih besar.',
          },
          {
            args: [[7]],
            expected: 7,
            hint: 'Satu elemen berarti dialah juaranya. Kalau juara awalmu elemen pertama, kasus ini otomatis benar.',
          },
          {
            args: [[-5, -2, -9]],
            expected: -2,
            hint: 'Semua angka negatif! Kalau juara awalmu `0`, tidak ada yang bisa mengalahkannya — mulailah dari `daftar[0]`, bukan 0.',
          },
          {
            args: [[]],
            expected: null,
            hint: 'Periksa `daftar.length === 0` paling awal dan kembalikan `null` — sebelum menyentuh `daftar[0]`.',
          },
          {
            args: [[1, 99, 99, 3]],
            expected: 99,
            hint: 'Nilai terbesar muncul dua kali — tidak masalah, perbandingan `>` biasa sudah menanganinya.',
          },
        ],
      },
      {
        id: 'algo-fizzbuzz',
        title: 'FizzBuzz',
        level: 'Menengah',
        question:
          'Tulis fungsi `fizzbuzz(n)` yang mengembalikan array berisi angka 1 sampai `n`, tetapi kelipatan 3 diganti `"Fizz"`, kelipatan 5 diganti `"Buzz"`, dan kelipatan keduanya diganti `"FizzBuzz"`. Contoh: `fizzbuzz(5)` menghasilkan `[1, 2, "Fizz", 4, "Buzz"]`.',
        ideas: [
          'Buat array kosong, lalu isi lewat perulangan `for` dari 1 sampai `n`.',
          'Periksa kelipatan 15 (3 dan 5 sekaligus) PALING DULU — urutan pengecekan adalah inti soal ini.',
          'Kelipatan dicek dengan sisa bagi: `i % 3 === 0`.',
          'Angka biasa dimasukkan sebagai angka, bukan string.',
        ],
        functionName: 'fizzbuzz',
        starter: `function fizzbuzz(n) {
  const hasil = [];
  // isi array "hasil" lewat perulangan
  return hasil;
}`,
        tests: [
          {
            args: [5],
            expected: [1, 2, 'Fizz', 4, 'Buzz'],
            hint: 'Angka biasa masuk sebagai angka (`4`), bukan string (`"4"`). Hanya kelipatan yang diganti teks.',
          },
          {
            args: [15],
            expected: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'],
            hint: '15 habis dibagi 3 DAN 5. Kalau kamu mengecek `% 3` lebih dulu, 15 keburu jadi "Fizz" — cek kelipatan 15 paling awal.',
          },
          {
            args: [1],
            expected: [1],
            hint: 'Hasilnya `[1]` saja — pastikan perulangan mulai dari 1 dan berakhir tepat di `n` (pakai `<=`, bukan `<`).',
          },
          {
            args: [3],
            expected: [1, 2, 'Fizz'],
            hint: 'Elemen terakhirnya `"Fizz"` — kelipatan di posisi terakhir juga harus diganti, jangan berhenti sebelum `n`.',
          },
        ],
      },
      {
        id: 'algo-palindrom',
        title: 'Deteksi Palindrom',
        level: 'Menengah',
        question:
          'Tulis fungsi `palindrom(kata)` yang mengembalikan `true` bila kata terbaca sama dari depan dan belakang, mengabaikan besar-kecil huruf dan spasi. Contoh: `palindrom("Kasur Rusak")` menghasilkan `true`.',
        ideas: [
          'Rapikan dulu inputnya: kecilkan semua huruf dengan `toLowerCase()` dan buang spasi.',
          'Spasi bisa dibuang dengan `split(" ").join("")` atau `replaceAll(" ", "")`.',
          'Cara satu: bandingkan string rapi dengan kebalikannya (pakai lagi idemu dari soal Membalik Kata).',
          'Cara dua: dua penunjuk — satu dari depan, satu dari belakang, bergerak ke tengah sambil membandingkan.',
        ],
        functionName: 'palindrom',
        starter: `function palindrom(kata) {
  // tulis kodemu di sini
}`,
        tests: [
          {
            args: ['katak'],
            expected: true,
            hint: 'Kata sederhana tanpa spasi — cukup bandingkan string dengan kebalikannya.',
          },
          {
            args: ['Kasur Rusak'],
            expected: true,
            hint: 'Ada huruf kapital dan spasi. Rapikan dulu: `toLowerCase()` lalu buang spasinya, baru dibandingkan.',
          },
          {
            args: ['koding'],
            expected: false,
            hint: 'Bukan palindrom — fungsimu juga harus bisa menjawab `false`, jangan selalu `true`.',
          },
          {
            args: ['Kasur ini rusak'],
            expected: true,
            hint: 'Spasinya lebih dari satu. `split(" ").join("")` atau `replaceAll(" ", "")` membuang semuanya sekaligus.',
          },
          {
            args: [''],
            expected: true,
            hint: 'String kosong dianggap palindrom — kebalikannya juga kosong, jadi keduanya sama.',
          },
        ],
      },
    ],
  },
  {
    topic: 'HTML',
    summary: 'Melatih struktur dan semantik halaman.',
    docSlug: 'html-dasar',
    exercises: [
      {
        id: 'html-profil',
        title: 'Halaman Profil Diri',
        level: 'Dasar',
        question:
          'Buat satu halaman `profil.html` yang menampilkan foto, nama, deskripsi singkat tentang dirimu, daftar tiga hobi, dan sebuah tautan ke akun media sosialmu.',
        ideas: [
          'Mulai dari kerangka dokumen: `<!DOCTYPE html>`, `<html>`, `<head>`, dan `<body>`.',
          'Pakai `<h1>` untuk namamu dan `<p>` untuk deskripsi singkat.',
          'Foto memakai `<img>` — jangan lupa isi atribut `alt` sebagai deskripsi gambar.',
          'Daftar hobi paling cocok memakai `<ul>` dengan beberapa `<li>` di dalamnya.',
          'Tautan memakai `<a href="...">`; tambahkan `target="_blank"` bila ingin membuka tab baru.',
        ],
        lang: 'html',
        starter: `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Profil — Nama Kamu</title>
  </head>
  <body>
    <!-- Tulis kodemu mulai dari sini -->
  </body>
</html>`,
      },
      {
        id: 'html-formulir',
        title: 'Formulir Pendaftaran',
        level: 'Dasar',
        question:
          'Buat formulir pendaftaran acara yang meminta nama lengkap, email, nomor telepon, pilihan kelas (dropdown), pilihan sesi (radio), dan satu kotak centang persetujuan.',
        ideas: [
          'Bungkus semuanya dalam `<form>`, lalu kelompokkan tiap baris agar rapi.',
          'Setiap input wajib punya `<label>` yang terhubung lewat atribut `for` dan `id` yang sama.',
          'Gunakan `type` yang tepat: `email`, `tel`, `checkbox`, dan `radio`.',
          'Dropdown memakai `<select>` yang berisi beberapa `<option>`.',
          'Tambahkan atribut `required` pada isian yang wajib diisi.',
        ],
      },
      {
        id: 'html-tabel-jadwal',
        title: 'Tabel Jadwal Pelajaran',
        level: 'Menengah',
        question:
          'Tampilkan jadwal pelajaran satu minggu dalam bentuk tabel: kolom hari, jam, dan nama mata pelajaran. Tabel harus mudah dibaca oleh pembaca layar.',
        ideas: [
          'Gunakan struktur lengkap: `<table>`, `<thead>`, `<tbody>`, dan `<caption>` sebagai judul tabel.',
          'Judul kolom memakai `<th>`, bukan `<td>`, supaya dikenali sebagai header.',
          'Tambahkan atribut `scope="col"` pada `<th>` agar hubungan baris–kolom jelas.',
          'Bila satu mata pelajaran memakan dua jam, coba gabungkan sel dengan `rowspan`.',
        ],
      },
    ],
  },

  {
    topic: 'CSS',
    summary: 'Melatih tata letak, warna, dan responsivitas.',
    docSlug: 'css-dasar',
    exercises: [
      {
        id: 'css-kartu-profil',
        title: 'Kartu Profil Bergaya',
        level: 'Dasar',
        question:
          'Ambil halaman profil dari latihan HTML, lalu ubah tampilannya menjadi sebuah kartu di tengah layar: punya jarak dalam, sudut membulat, bayangan halus, dan foto berbentuk lingkaran.',
        ideas: [
          'Beri elemen pembungkus sebuah class, misal `.kartu`, lalu targetkan dari CSS.',
          'Sudut membulat memakai `border-radius`; bayangan memakai `box-shadow`.',
          'Jarak di dalam kartu memakai `padding`, jarak antar kartu memakai `margin`.',
          'Foto lingkaran: samakan `width` dan `height`, lalu beri `border-radius: 50%`.',
          'Menengahkan kartu: `margin: 0 auto` dengan `max-width` tertentu.',
        ],
        lang: 'css',
        starter: `.kartu {
  max-width: 360px;
  /* lanjutkan: padding, border-radius, box-shadow, margin */
}`,
      },
      {
        id: 'css-navbar-flexbox',
        title: 'Navbar dengan Flexbox',
        level: 'Menengah',
        question:
          'Buat bilah navigasi dengan logo di kiri dan tiga menu di kanan. Pada layar ponsel (lebar di bawah 600px), menu berubah menjadi susunan ke bawah.',
        ideas: [
          'Jadikan pembungkus navbar `display: flex` lalu atur `justify-content: space-between`.',
          'Ratakan vertikal dengan `align-items: center`, dan beri jarak antar menu dengan `gap`.',
          'Daftar menu tetap memakai `<ul>`; hilangkan titiknya dengan `list-style: none`.',
          'Untuk layar kecil, pakai `@media (max-width: 600px)` lalu ubah `flex-direction` menjadi `column`.',
        ],
      },
      {
        id: 'css-galeri-grid',
        title: 'Galeri Foto Responsif',
        level: 'Menengah',
        question:
          'Susun enam foto menjadi galeri yang otomatis menyesuaikan jumlah kolom: tiga kolom di layar lebar, dua di tablet, satu di ponsel — tanpa menulis media query satu per satu.',
        ideas: [
          'Gunakan `display: grid` pada pembungkus galeri.',
          'Kunci soal ini ada di `grid-template-columns` dengan `repeat(auto-fit, minmax(220px, 1fr))`.',
          'Beri jarak antar foto dengan `gap`.',
          'Agar foto tidak gepeng, pakai `object-fit: cover` dengan tinggi tetap.',
        ],
        lang: 'css',
        starter: `.galeri {
  display: grid;
  /* satu baris ini yang membuat galeri responsif tanpa media query */
  gap: 16px;
}`,
      },
    ],
  },

  {
    topic: 'JavaScript',
    summary: 'Melatih logika, fungsi, dan interaksi halaman.',
    docSlug: 'javascript-dasar',
    exercises: [
      {
        id: 'js-konversi-suhu',
        title: 'Konversi Suhu',
        level: 'Dasar',
        question:
          'Buat fungsi `celsiusKeFahrenheit(c)` dan `fahrenheitKeCelsius(f)`, lalu tampilkan hasilnya di halaman ketika pengguna mengetik angka pada sebuah input.',
        ideas: [
          'Rumusnya: `F = c * 9 / 5 + 32` dan `C = (f - 32) * 5 / 9`.',
          'Buat fungsi terpisah untuk perhitungan, jangan campur dengan kode tampilan.',
          'Ambil elemen dengan `document.querySelector()`.',
          'Dengarkan event `input` agar hasil berubah saat diketik, bukan menunggu tombol.',
          'Nilai dari input selalu berupa teks — ubah dulu dengan `Number()` atau `parseFloat()`.',
        ],
        lang: 'js',
        starter: `function celsiusKeFahrenheit(c) {
  // kembalikan hasil konversi di sini
}

const input = document.querySelector('#suhu');
input.addEventListener('input', () => {
  // baca nilai, hitung, lalu tampilkan
});`,
      },
      {
        id: 'js-penghitung-klik',
        title: 'Penghitung Klik',
        level: 'Dasar',
        question:
          'Buat tombol yang menghitung berapa kali ia diklik. Tambahkan tombol kedua untuk mengembalikan hitungan ke nol.',
        ideas: [
          'Simpan angka hitungan pada sebuah variabel `let count = 0`.',
          'Pasang `addEventListener("click", ...)` pada tombol.',
          'Setiap klik, naikkan nilai dengan `count += 1`, lalu perbarui teks tombol.',
          'Perbarui tampilan memakai `textContent`, bukan `innerHTML`, karena isinya teks biasa.',
          'Tombol reset cukup mengembalikan `count = 0` lalu memperbarui tampilan lagi.',
        ],
      },
      {
        id: 'js-daftar-tugas',
        title: 'Daftar Tugas (To-Do List)',
        level: 'Menengah',
        question:
          'Buat aplikasi daftar tugas: pengguna mengetik tugas lalu menekan Tambah, tugas muncul di daftar, bisa ditandai selesai, dan bisa dihapus.',
        ideas: [
          'Simpan data tugas dalam sebuah array of object, misal `{ id, teks, selesai }`.',
          'Pisahkan menjadi dua bagian: fungsi yang mengubah data, dan satu fungsi `render()` yang menggambar ulang daftar dari data.',
          'Setiap kali data berubah, panggil `render()` — jangan mengubah DOM secara manual di banyak tempat.',
          'Gunakan `array.map()` untuk membangun daftar dan `array.filter()` untuk menghapus.',
          'Cegah halaman ter-refresh saat form dikirim dengan `event.preventDefault()`.',
        ],
        lang: 'js',
        starter: `let tugas = [];

function render() {
  // gambar ulang daftar dari array "tugas"
}

function tambah(teks) {
  // tambahkan objek baru ke array, lalu panggil render()
}`,
      },
      {
        id: 'js-validasi-form',
        title: 'Validasi Formulir',
        level: 'Menengah',
        question:
          'Validasi formulir pendaftaran sebelum dikirim: nama minimal 3 huruf, email harus mengandung `@`, dan kata sandi minimal 8 karakter. Tampilkan pesan kesalahan di bawah isian yang salah.',
        ideas: [
          'Dengarkan event `submit` pada `<form>`, lalu hentikan pengiriman dengan `preventDefault()`.',
          'Buat satu fungsi kecil per aturan, misal `namaValid(nilai)` yang mengembalikan `true`/`false`.',
          'Kumpulkan pesan kesalahan dulu, baru tampilkan sekaligus — lebih mudah dibaca kodenya.',
          'Tampilkan pesan di elemen `<small>` di bawah tiap input, bukan lewat `alert()`.',
          'Bersihkan pesan lama setiap kali validasi dijalankan ulang.',
        ],
      },
    ],
  },

  {
    topic: 'Android',
    summary: 'Melatih tata letak dan interaksi aplikasi Android.',
    docSlug: 'android-dasar',
    exercises: [
      {
        id: 'android-salam-nama',
        title: 'Aplikasi Salam Nama',
        level: 'Dasar',
        question:
          'Buat aplikasi dengan satu kolom isian nama dan satu tombol. Saat tombol ditekan, tampilkan teks "Halo, <nama>!" di layar.',
        ideas: [
          'Susun tata letak dengan `EditText`, `Button`, dan `TextView`.',
          'Beri `id` pada setiap komponen agar bisa diakses dari kode.',
          'Ambil isi input dengan `.text.toString()`.',
          'Pasang aksi tombol lewat `setOnClickListener { ... }`.',
          'Tangani kasus input kosong — tampilkan pesan singkat memakai `Toast`.',
        ],
      },
      {
        id: 'android-konversi-mata-uang',
        title: 'Konversi Mata Uang',
        level: 'Menengah',
        question:
          'Buat aplikasi yang mengubah Rupiah ke Dolar memakai kurs tetap. Pengguna mengetik nominal, memilih arah konversi, lalu melihat hasilnya.',
        ideas: [
          'Simpan nilai kurs dalam satu konstanta agar mudah diubah.',
          'Pisahkan logika hitung ke fungsi tersendiri supaya bisa diuji terpisah dari tampilan.',
          'Gunakan `RadioGroup` atau `Spinner` untuk memilih arah konversi.',
          'Ubah teks input menjadi angka dengan aman memakai `toDoubleOrNull()`.',
          'Format hasil agar hanya dua angka di belakang koma.',
        ],
      },
    ],
  },

  {
    topic: 'Flutter',
    summary: 'Melatih widget, state, dan daftar data.',
    docSlug: 'flutter-dasar',
    exercises: [
      {
        id: 'flutter-counter',
        title: 'Penghitung dengan setState',
        level: 'Dasar',
        question:
          'Buat halaman dengan angka di tengah layar serta dua tombol: satu menambah, satu mengurangi. Angka tidak boleh kurang dari nol.',
        ideas: [
          'Gunakan `StatefulWidget` karena nilainya berubah-ubah.',
          'Simpan angka pada variabel di dalam `State`, lalu ubah di dalam `setState(() { ... })`.',
          'Susun tampilan dengan `Column` dan `Row` beserta `MainAxisAlignment`.',
          'Cegah nilai negatif dengan pengecekan sebelum mengurangi.',
        ],
        lang: 'dart',
        starter: `class Penghitung extends StatefulWidget {
  @override
  State<Penghitung> createState() => _PenghitungState();
}

class _PenghitungState extends State<Penghitung> {
  int nilai = 0;

  @override
  Widget build(BuildContext context) {
    // susun tampilan di sini
  }
}`,
      },
      {
        id: 'flutter-daftar-kontak',
        title: 'Daftar Kontak',
        level: 'Menengah',
        question:
          'Tampilkan daftar 10 kontak (nama dan nomor telepon) yang bisa digulir. Saat satu kontak ditekan, buka halaman detail berisi data kontak tersebut.',
        ideas: [
          'Siapkan datanya lebih dulu sebagai `List` berisi objek kontak sederhana.',
          'Gunakan `ListView.builder` agar efisien untuk daftar panjang.',
          'Tiap baris cocok memakai `ListTile` dengan `title`, `subtitle`, dan `leading`.',
          'Bungkus baris dengan `InkWell` atau pakai properti `onTap` milik `ListTile`.',
          'Pindah halaman dengan `Navigator.push`, lalu kirim data kontak lewat konstruktor.',
        ],
      },
    ],
  },

  {
    topic: 'Desktop',
    summary: 'Melatih aplikasi desktop dan penyimpanan berkas.',
    docSlug: 'desktop-dasar',
    exercises: [
      {
        id: 'desktop-kalkulator',
        title: 'Kalkulator Sederhana',
        level: 'Dasar',
        question:
          'Buat kalkulator desktop dengan tombol angka 0–9 dan operasi tambah, kurang, kali, bagi, beserta layar hasil di bagian atas.',
        ideas: [
          'Rancang tata letak tombol memakai grid agar rapi dan mudah ditambah.',
          'Pisahkan logika hitung dari kode antarmuka — buat fungsi `hitung(a, b, operator)`.',
          'Simpan angka pertama, operator, dan angka kedua dalam variabel terpisah.',
          'Tangani pembagian dengan nol dan tampilkan pesan, jangan biarkan aplikasi berhenti.',
        ],
      },
      {
        id: 'desktop-catatan',
        title: 'Aplikasi Catatan',
        level: 'Menengah',
        question:
          'Buat aplikasi catatan: pengguna bisa menulis teks, menyimpannya ke sebuah berkas, dan membukanya kembali saat aplikasi dijalankan lagi.',
        ideas: [
          'Sediakan area teks besar untuk isi catatan, plus tombol Simpan dan Buka.',
          'Gunakan dialog pemilih berkas bawaan sistem, jangan membuat sendiri.',
          'Tulis dan baca berkas dengan penanganan kesalahan (berkas tidak ada, tidak ada izin).',
          'Simpan lokasi berkas terakhir agar bisa dibuka otomatis saat aplikasi dijalankan.',
        ],
      },
    ],
  },
];
