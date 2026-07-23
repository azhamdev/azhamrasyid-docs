# Pengenalan Pemrograman Website

Selamat datang di bab **Pemrograman Website**! Di sini Anda akan mempelajari
dasar-dasar membangun sebuah halaman web dari nol menggunakan tiga teknologi
inti: **HTML**, **CSS**, dan **JavaScript**.

## Apa Itu Pemrograman Website?

Pemrograman website (atau *web development*) adalah proses membuat halaman atau
aplikasi yang dapat diakses melalui internet menggunakan peramban (*browser*)
seperti Chrome, Firefox, atau Safari.

Setiap halaman web yang Anda lihat — mulai dari blog sederhana hingga aplikasi
besar seperti media sosial — dibangun di atas tiga lapisan dasar yang saling
melengkapi.

## Tiga Pilar Website

Bayangkan sebuah halaman web seperti tubuh manusia:

| Teknologi      | Peran            | Analogi              |
| -------------- | ---------------- | -------------------- |
| **HTML**       | Struktur & isi   | Kerangka / tulang    |
| **CSS**        | Tampilan & gaya  | Pakaian & penampilan |
| **JavaScript** | Perilaku & logika| Otot & otak          |

### 1. HTML — Struktur

**HTML** (*HyperText Markup Language*) menentukan **isi** dan **struktur**
halaman: judul, paragraf, gambar, tombol, dan lainnya. Tanpa HTML, tidak ada
apa pun yang bisa ditampilkan.

### 2. CSS — Tampilan

**CSS** (*Cascading Style Sheets*) mengatur **tampilan** halaman: warna,
ukuran huruf, tata letak, jarak, dan animasi. CSS membuat halaman menjadi
indah dan nyaman dilihat.

### 3. JavaScript — Interaktivitas

**JavaScript** menambahkan **perilaku** dan **logika**: merespons klik,
memvalidasi form, mengambil data, dan mengubah halaman secara dinamis tanpa
perlu memuat ulang.

## Cara Kerjanya Bersama

Berikut contoh sederhana yang menggabungkan ketiganya dalam satu file:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Halaman Pertama Saya</title>
    <style>
      /* CSS — mengatur tampilan */
      button {
        background: #2563eb;
        color: white;
        padding: 10px 16px;
        border: none;
        border-radius: 8px;
      }
    </style>
  </head>
  <body>
    <!-- HTML — struktur & isi -->
    <h1>Halo, Dunia!</h1>
    <button onclick="sapa()">Klik Saya</button>

    <script>
      // JavaScript — perilaku
      function sapa() {
        alert('Selamat datang di dunia pemrograman web!');
      }
    </script>
  </body>
</html>
```

## Yang Anda Butuhkan

Untuk mulai belajar, Anda hanya perlu:

- ✅ **Peramban** — Chrome, Firefox, atau Edge (kemungkinan sudah terpasang).
- ✅ **Editor kode** — [VS Code](https://code.visualstudio.com/) sangat
  direkomendasikan.
- ✅ **Rasa ingin tahu** — bahan bakar terbaik untuk belajar! 🚀

## Selanjutnya

Pada halaman-halaman berikutnya, kita akan membahas setiap teknologi secara
mendalam:

1. [HTML — Struktur Halaman](/html-dasar)
2. [CSS — Mempercantik Halaman](/css-dasar)
3. [JavaScript — Menambah Interaktivitas](/javascript-dasar)

Mari kita mulai! 👇
