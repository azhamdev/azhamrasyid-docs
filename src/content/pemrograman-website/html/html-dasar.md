# HTML — Struktur Halaman

**HTML** (*HyperText Markup Language*) adalah bahasa markup yang digunakan untuk
membangun **struktur** dan **isi** sebuah halaman web. HTML adalah fondasi dari
setiap website.

## Konsep Dasar: Elemen dan Tag

HTML terdiri dari **elemen** yang ditandai dengan **tag**. Sebuah tag biasanya
memiliki pembuka dan penutup:

```html
<p>Ini adalah sebuah paragraf.</p>
```

- `<p>` adalah **tag pembuka**
- `</p>` adalah **tag penutup**
- Teks di antaranya adalah **isi** dari elemen

## Struktur Dokumen HTML

Setiap halaman HTML memiliki kerangka dasar seperti berikut:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Judul Halaman</title>
  </head>
  <body>
    <!-- Semua isi yang terlihat ada di sini -->
    <h1>Selamat Datang</h1>
    <p>Ini halaman web pertama saya.</p>
  </body>
</html>
```

Penjelasan singkat:

- `<!DOCTYPE html>` — memberi tahu peramban bahwa ini dokumen HTML5.
- `<head>` — berisi informasi *tentang* halaman (judul, karakter, dsb.).
- `<body>` — berisi konten yang **terlihat** oleh pengunjung.

## Tag yang Sering Digunakan

### Judul (Heading)

Ada enam tingkat judul, dari yang paling penting hingga paling kecil:

```html
<h1>Judul Utama</h1>
<h2>Sub Judul</h2>
<h3>Sub-sub Judul</h3>
```

### Paragraf dan Teks

```html
<p>Ini paragraf biasa.</p>
<strong>Teks tebal</strong>
<em>Teks miring</em>
```

### Tautan (Link)

```html
<a href="https://example.com">Kunjungi situs ini</a>
```

### Gambar

```html
<img src="foto.jpg" alt="Deskripsi gambar" />
```

### Daftar (List)

```html
<!-- Daftar berurutan -->
<ol>
  <li>Langkah pertama</li>
  <li>Langkah kedua</li>
</ol>

<!-- Daftar tidak berurutan -->
<ul>
  <li>Apel</li>
  <li>Jeruk</li>
</ul>
```

## Elemen Semantik

Gunakan elemen **semantik** agar struktur halaman lebih bermakna dan mudah
dibaca oleh mesin pencari maupun pembaca layar:

```html
<header>Bagian kepala halaman</header>
<nav>Menu navigasi</nav>
<main>Konten utama</main>
<footer>Bagian kaki halaman</footer>
```

## Latihan

Coba buat file bernama `index.html`, salin kode berikut, lalu buka di peramban:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Profil Saya</title>
  </head>
  <body>
    <h1>Nama Saya</h1>
    <p>Saya sedang belajar pemrograman web.</p>
    <h2>Hobi Saya</h2>
    <ul>
      <li>Membaca</li>
      <li>Coding</li>
      <li>Bermain musik</li>
    </ul>
  </body>
</html>
```

> **Tips:** HTML hanya mengatur *struktur*. Halaman akan terlihat polos —
> itu wajar! Pada bab berikutnya kita akan mempercantiknya dengan **CSS**.

## Selanjutnya

Lanjut ke [CSS — Mempercantik Halaman](/css-dasar) untuk memberi gaya pada
halaman Anda.
