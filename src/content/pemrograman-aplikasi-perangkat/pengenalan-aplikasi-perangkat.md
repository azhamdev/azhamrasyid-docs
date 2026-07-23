# Pengenalan Pemrograman Aplikasi Perangkat

Selamat datang di bab **Pemrograman Aplikasi Perangkat**! Jika sebelumnya kita
membangun aplikasi yang berjalan di dalam *browser*, kali ini kita akan belajar
membuat aplikasi yang **terpasang langsung** di perangkat pengguna — mulai dari
ponsel di saku, hingga komputer di atas meja.

## Apa Itu Aplikasi Perangkat?

**Aplikasi perangkat** (*native application*) adalah program yang dibuat khusus
untuk berjalan pada sistem operasi tertentu, seperti Android, iOS, Windows,
macOS, atau Linux.

Berbeda dengan aplikasi web yang diakses lewat peramban, aplikasi perangkat:

- **Dipasang** (*install*) langsung ke perangkat.
- Dapat mengakses **fitur perangkat keras** seperti kamera, GPS, sensor, dan
  penyimpanan lokal.
- Sering kali bisa berjalan **tanpa koneksi internet** (*offline*).
- Muncul sebagai **ikon** di layar utama atau menu aplikasi.

## Jenis-Jenis Aplikasi Perangkat

Bayangkan sebuah perangkat lunak seperti kendaraan — jenisnya bergantung pada
"medan" tempat ia berjalan:

| Jenis Aplikasi   | Berjalan Di           | Contoh                    |
| ---------------- | --------------------- | ------------------------- |
| **Mobile**       | Android & iOS         | WhatsApp, Instagram, Gojek |
| **Desktop**      | Windows, macOS, Linux | VS Code, Spotify, Zoom     |
| **Lintas Platform** | Banyak OS sekaligus | Aplikasi buatan Flutter    |

### 1. Aplikasi Mobile

Dirancang untuk **ponsel dan tablet**. Fokus pada layar sentuh, ukuran layar
kecil, dan penggunaan satu tangan. Contoh teknologi: **Kotlin** (Android) dan
**Swift** (iOS).

### 2. Aplikasi Desktop

Dirancang untuk **komputer**. Memiliki jendela, menu, dan biasanya digunakan
dengan *keyboard* dan *mouse*. Contoh teknologi: **Electron**, **.NET**, dan
**Qt**.

### 3. Aplikasi Lintas Platform

Ditulis **satu kali**, lalu dijalankan di banyak sistem operasi. Menghemat waktu
dan biaya. Contoh teknologi: **Flutter**, **React Native**, dan **.NET MAUI**.

## Native vs. Lintas Platform

Ada dua pendekatan besar dalam membangun aplikasi perangkat:

- **Native** — dibuat khusus untuk satu platform. Performanya maksimal dan akses
  ke fitur perangkat paling lengkap, tetapi Anda harus membangun ulang untuk
  setiap platform.
- **Lintas platform** — satu basis kode untuk banyak platform. Lebih hemat waktu,
  tetapi kadang ada batasan pada fitur yang sangat spesifik.

> **Tidak ada yang "paling benar".** Pilihan bergantung pada kebutuhan proyek,
> anggaran, dan target pengguna Anda.

## Siklus Hidup Sebuah Aplikasi

Secara umum, membangun aplikasi perangkat melewati tahapan berikut:

1. **Perancangan** — menentukan fitur dan tampilan (*UI/UX*).
2. **Pengembangan** — menulis kode program.
3. **Pengujian** — memastikan aplikasi berjalan tanpa masalah (*bug*).
4. **Distribusi** — menerbitkan ke toko aplikasi (Play Store, App Store) atau
   berkas pemasang (*installer*).
5. **Pemeliharaan** — memperbaiki masalah dan menambah fitur baru.

## Yang Anda Butuhkan

Peralatan dasar untuk memulai:

- ✅ **Komputer** dengan spesifikasi memadai.
- ✅ **Editor kode / IDE** — seperti [Android Studio](https://developer.android.com/studio),
  [VS Code](https://code.visualstudio.com/), atau [Visual Studio](https://visualstudio.microsoft.com/).
- ✅ **Emulator atau perangkat asli** untuk mencoba aplikasi.
- ✅ **Kesabaran dan rasa ingin tahu** — kunci utama belajar! 🚀

## Selanjutnya

Pada halaman-halaman berikutnya, kita akan membahas setiap jenis aplikasi secara
lebih mendalam:

1. [Dasar Aplikasi Android](/android-dasar)
2. [Dasar Aplikasi Desktop](/desktop-dasar)
3. [Dasar Flutter (Lintas Platform)](/flutter-dasar)

Mari kita mulai! 👇
