# Teks, Daftar & Tautan

Sebagian besar isi sebuah halaman web adalah **teks**. Pada bagian ini kita
memperdalam cara menata teks, membuat daftar, serta menghubungkan halaman satu
dengan lainnya menggunakan tautan.

## Judul Bertingkat (Heading)

HTML menyediakan enam tingkat judul, dari `<h1>` (paling penting) hingga `<h6>`
(paling kecil). Tingkatan ini bukan sekadar soal ukuran huruf — ia membentuk
**hierarki dokumen** yang dibaca oleh mesin pencari dan pembaca layar.

```html
<h1>Judul Halaman (hanya satu per halaman)</h1>
<h2>Bagian Besar</h2>
<h3>Sub-bagian</h3>
<h4>Rincian di dalam sub-bagian</h4>
```

> **Aturan penting:** Gunakan **satu** `<h1>` per halaman, lalu turun secara
> berurutan. Jangan melompat dari `<h1>` langsung ke `<h4>` hanya karena ingin
> huruf yang lebih kecil — itu tugas CSS, bukan HTML.

## Paragraf dan Pemisah

```html
<p>Ini paragraf pertama yang berisi penjelasan.</p>
<p>Ini paragraf kedua yang terpisah.</p>

<hr /> <!-- garis pemisah horizontal antar-topik -->

<p>Baris ini<br />dipaksa turun ke bawah dengan br.</p>
```

- `<p>` — membungkus satu paragraf teks.
- `<hr>` — garis pemisah tematik (misalnya antar-bab).
- `<br>` — memaksa pindah baris **di dalam** paragraf. Gunakan seperlunya saja.

## Memformat Teks

HTML punya banyak tag untuk menandai makna sebuah teks:

```html
<strong>Penting sekali</strong> — tebal & bermakna penting
<em>Penekanan</em> — miring & memberi penekanan
<mark>Disorot</mark> — seperti stabilo
<small>Teks kecil</small> — keterangan tambahan
<del>Dihapus</del> dan <ins>disisipkan</ins>
Rumus air: H<sub>2</sub>O — dan pangkat: x<sup>2</sup>
<code>const x = 10;</code> — potongan kode singkat
<abbr title="HyperText Markup Language">HTML</abbr> — singkatan
```

Untuk kutipan panjang, gunakan `<blockquote>`:

```html
<blockquote>
  <p>"Kode yang baik adalah dokumentasinya sendiri."</p>
  <cite>— Steve McConnell</cite>
</blockquote>
```

> **Semantik vs tampilan:** `<strong>` dan `<b>` sama-sama menebalkan, tetapi
> `<strong>` berarti *"ini penting"* sedangkan `<b>` hanya *"tebalkan saja"*.
> Utamakan tag yang bermakna agar konten mudah dipahami mesin.

## Karakter Khusus (Entitas)

Beberapa karakter tidak bisa diketik langsung karena punya arti khusus dalam
HTML. Gunakan **entitas** berikut:

| Tampil | Ditulis    | Keterangan          |
| ------ | ---------- | ------------------- |
| `<`    | `&lt;`     | Kurang dari         |
| `>`    | `&gt;`     | Lebih dari          |
| `&`    | `&amp;`    | Ampersand           |
| `"`    | `&quot;`   | Tanda kutip         |
| `©`    | `&copy;`   | Hak cipta           |
| ` `    | `&nbsp;`   | Spasi yang menyatu  |

## Daftar (List)

### Daftar tidak berurutan

```html
<ul>
  <li>Apel</li>
  <li>Jeruk</li>
  <li>Mangga</li>
</ul>
```

### Daftar berurutan

```html
<ol start="1">
  <li>Buka editor kode</li>
  <li>Tulis kode HTML</li>
  <li>Simpan lalu buka di peramban</li>
</ol>
```

### Daftar bersarang

Daftar bisa berada di dalam daftar lain untuk membuat sub-item:

```html
<ul>
  <li>
    Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>
```

### Daftar definisi

Cocok untuk pasangan istilah dan penjelasannya:

```html
<dl>
  <dt>HTML</dt>
  <dd>Bahasa markup untuk struktur halaman.</dd>
  <dt>CSS</dt>
  <dd>Bahasa untuk mengatur tampilan halaman.</dd>
</dl>
```

## Tautan (Link)

Tautan dibuat dengan tag `<a>` dan atribut `href`.

```html
<!-- Tautan ke situs lain (absolut) -->
<a href="https://developer.mozilla.org">Dokumentasi MDN</a>

<!-- Tautan ke halaman lain di situs yang sama (relatif) -->
<a href="/tentang.html">Tentang Kami</a>

<!-- Buka di tab baru dengan aman -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Buka di tab baru
</a>
```

### Tautan khusus

```html
<a href="#kontak">Loncat ke bagian Kontak</a>  <!-- ke id di halaman ini -->
<a href="mailto:halo@contoh.com">Kirim email</a>
<a href="tel:+6281234567890">Telepon kami</a>
<a href="brosur.pdf" download>Unduh brosur</a>
```

Agar tautan `#kontak` di atas berfungsi, halaman harus punya elemen dengan `id`
yang sama:

```html
<section id="kontak">
  <h2>Kontak</h2>
  <!-- ... -->
</section>
```

## Studi Kasus: Artikel Blog Sederhana

Mari gabungkan semuanya menjadi sebuah artikel blog yang rapi dan bermakna.

```html title="artikel.html"
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Belajar HTML Itu Mudah</title>
  </head>
  <body>
    <article>
      <h1>Belajar HTML Itu Mudah</h1>
      <p><small>Ditulis oleh Andi · 27 Juli 2026</small></p>

      <p>
        <strong>HTML</strong> adalah fondasi dari setiap halaman web. Dalam
        artikel ini kita akan membahas <em>tiga alasan</em> mengapa HTML mudah
        dipelajari.
      </p>

      <h2>Tiga Alasan</h2>
      <ol>
        <li>Sintaksnya sederhana dan mudah dibaca.</li>
        <li>Hasilnya langsung terlihat di peramban.</li>
        <li>Banyak sumber belajar gratis.</li>
      </ol>

      <blockquote>
        <p>"Mulailah dari yang kecil, konsisten setiap hari."</p>
      </blockquote>

      <p>
        Ingin mendalami lebih lanjut? Baca
        <a href="https://developer.mozilla.org" target="_blank"
          rel="noopener noreferrer">dokumentasi MDN</a>.
      </p>

      <hr />
      <p><small>&copy; 2026 Blog Belajar Web</small></p>
    </article>
  </body>
</html>
```

Perhatikan bagaimana setiap tag dipilih karena **maknanya**: `<article>` untuk
tulisan mandiri, `<ol>` untuk urutan alasan, dan `<blockquote>` untuk kutipan.

## Selanjutnya

Teks sudah rapi. Kini mari kita hidupkan halaman dengan
[Gambar & Media](/html-gambar-media).
