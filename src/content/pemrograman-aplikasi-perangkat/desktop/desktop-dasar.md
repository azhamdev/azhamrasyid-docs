# Dasar Aplikasi Desktop

**Aplikasi desktop** adalah program yang berjalan di komputer — Windows, macOS,
atau Linux. Aplikasi ini muncul dalam bentuk **jendela** dan biasanya dipasang
melalui berkas *installer*.

## Cara Membangun Aplikasi Desktop

Ada banyak teknologi untuk membuat aplikasi desktop. Beberapa yang populer:

| Teknologi   | Bahasa            | Cocok Untuk                        |
| ----------- | ----------------- | ---------------------------------- |
| **Electron**| JavaScript        | Web developer yang ingin ke desktop |
| **.NET**    | C#                | Aplikasi Windows profesional        |
| **Qt**      | C++ / Python      | Aplikasi berperforma tinggi         |
| **Tauri**   | Rust + Web        | Aplikasi ringan & hemat memori      |

Karena kita datang dari dunia web, mari fokus pada **Electron** — yang menggunakan
HTML, CSS, dan JavaScript yang sudah kita kenal.

## Apa Itu Electron?

**Electron** memungkinkan Anda membuat aplikasi desktop menggunakan teknologi
web. Aplikasi terkenal seperti **VS Code**, **Slack**, dan **Discord** dibangun
dengan Electron!

Konsep intinya sederhana:

- **Main Process** — mengatur jendela dan sistem operasi.
- **Renderer Process** — menampilkan antarmuka (halaman web di dalam jendela).

## Membuat Aplikasi Electron Pertama

Pertama, siapkan proyek dan pasang Electron:

```bash
mkdir aplikasi-saya
cd aplikasi-saya
npm init -y
npm install electron --save-dev
```

Buat berkas `main.js` sebagai titik masuk aplikasi:

```javascript
const { app, BrowserWindow } = require('electron');

function buatJendela() {
  const jendela = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // Memuat halaman HTML ke dalam jendela
  jendela.loadFile('index.html');
}

// Jalankan saat aplikasi siap
app.whenReady().then(buatJendela);
```

Lalu buat tampilannya di `index.html`:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Aplikasi Desktop Saya</title>
    <style>
      body {
        font-family: sans-serif;
        text-align: center;
        padding: 40px;
      }
    </style>
  </head>
  <body>
    <h1>Halo dari Desktop! 🖥️</h1>
    <p>Ini aplikasi Electron pertama saya.</p>
  </body>
</html>
```

## Menjalankan Aplikasi

Tambahkan skrip pada `package.json`:

```json
{
  "scripts": {
    "start": "electron ."
  }
}
```

Lalu jalankan dari terminal:

```bash
npm start
```

Sebuah jendela desktop akan muncul menampilkan halaman Anda! 🎉

## Kelebihan & Kekurangan Electron

| Kelebihan                         | Kekurangan                          |
| --------------------------------- | ----------------------------------- |
| Pakai keahlian web yang sudah ada | Ukuran aplikasi cukup besar         |
| Satu kode untuk semua OS          | Penggunaan memori lebih tinggi      |
| Ekosistem npm yang luas           | Kurang optimal untuk aplikasi berat |

> **Tips:** Jika Anda butuh aplikasi yang **sangat ringan**, pertimbangkan
> **Tauri**. Ia mirip Electron tetapi jauh lebih hemat memori karena memakai
> peramban bawaan sistem operasi.

## Latihan

Kembangkan aplikasi Electron di atas:

1. Tambahkan sebuah tombol pada `index.html`.
2. Saat diklik, tampilkan pesan sapaan menggunakan JavaScript.
3. Ubah ukuran jendela menjadi `1000 x 700`.

## Selanjutnya

Lanjut ke [Dasar Flutter (Lintas Platform)](/flutter-dasar) untuk membuat satu
aplikasi yang berjalan di banyak perangkat sekaligus.
