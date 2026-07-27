# Semantik & Aksesibilitas

Dua halaman bisa terlihat sama persis di layar, tetapi yang satu tersusun dari
tag **semantik** dan yang lain hanya tumpukan `<div>`. Perbedaannya tak terlihat
mata, namun sangat terasa bagi mesin pencari dan pembaca layar. Bab ini menutup
fondasi HTML dengan cara menyusun halaman yang **bermakna** dan **mudah
diakses**.

## Apa Itu HTML Semantik?

**Semantik** berarti tag yang dipakai menjelaskan *arti* isinya, bukan sekadar
"kotak". Bandingkan dua contoh berikut:

```html
<!-- Tanpa makna — hanya kotak polos -->
<div class="atas">
  <div class="menu">...</div>
</div>

<!-- Semantik — jelas perannya -->
<header>
  <nav>...</nav>
</header>
```

Keduanya bisa tampil sama, tetapi versi semantik memberi tahu peramban:
*"ini kepala halaman, dan di dalamnya ada navigasi."*

## Elemen Struktur Utama

| Elemen        | Peran                                                |
| ------------- | ---------------------------------------------------- |
| `<header>`    | Kepala halaman/bagian (logo, judul, navigasi).       |
| `<nav>`       | Kumpulan tautan navigasi utama.                      |
| `<main>`      | Konten utama halaman (hanya satu per halaman).       |
| `<article>`   | Konten mandiri yang utuh (artikel, kartu, komentar). |
| `<section>`   | Pengelompokan tematik dalam sebuah halaman.          |
| `<aside>`     | Konten sampingan (iklan, tautan terkait).            |
| `<footer>`    | Kaki halaman/bagian (hak cipta, kontak).             |

Berikut kerangka halaman yang tersusun rapi menggunakannya:

```html
<body>
  <header>
    <h1>Nama Website</h1>
    <nav>
      <a href="/">Beranda</a>
      <a href="/tentang">Tentang</a>
      <a href="/kontak">Kontak</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Judul Artikel</h2>
      <p>Isi artikel...</p>
    </article>

    <aside>
      <h3>Artikel Terkait</h3>
      <ul>
        <li><a href="#">Tautan 1</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 Nama Website</p>
  </footer>
</body>
```

## article vs section vs div

Aturan sederhana untuk memilih:

- **`<article>`** — jika isinya masih bermakna saat berdiri sendiri (misalnya
  satu postingan blog yang bisa dibagikan terpisah).
- **`<section>`** — jika mengelompokkan konten bertema dengan judul, tetapi tidak
  mandiri (misalnya bagian "Fitur" pada landing page).
- **`<div>`** — hanya pembungkus untuk keperluan tata letak/CSS, tanpa makna.

> **Panduan praktis:** Pakai `<div>` hanya ketika tidak ada tag semantik yang
> cocok. Jika ragu antara `<section>` dan `<div>`, tanyakan: *"Apakah bagian ini
> punya judul dan tema tersendiri?"* Jika ya, pakai `<section>`.

## Hierarki Judul yang Benar

Pembaca layar sering menavigasi halaman lewat daftar judul. Karena itu, urutan
`<h1>`–`<h6>` harus logis dan tidak melompat:

```html
<h1>Panduan Belajar Web</h1>
  <h2>Bab 1: HTML</h2>
    <h3>Tag Dasar</h3>
    <h3>Formulir</h3>
  <h2>Bab 2: CSS</h2>
```

## Aksesibilitas (a11y)

**Aksesibilitas** memastikan website bisa digunakan semua orang, termasuk
pengguna pembaca layar atau yang hanya memakai keyboard. Beberapa prinsip inti:

- **Selalu isi `alt`** pada gambar yang bermakna.
- **Pasangkan `<label>`** dengan setiap input form.
- **Gunakan tag semantik** agar struktur halaman terbaca alat bantu.
- **Jaga urutan judul** tetap runtut.

Bila tidak ada tag bawaan yang cocok, atribut **ARIA** bisa menambah informasi:

```html
<button aria-label="Tutup menu">✕</button>

<nav aria-label="Navigasi utama">
  <!-- ... -->
</nav>
```

`aria-label` memberi nama yang dibacakan pembaca layar — berguna saat tombol
hanya berisi ikon tanpa teks.

## Meta untuk SEO & Berbagi

Bagian `<head>` juga menyimpan informasi penting bagi mesin pencari dan media
sosial:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Toko Kopi Nusantara — Kopi Segar Setiap Hari</title>
  <meta name="description"
    content="Menjual biji kopi pilihan dari seluruh Nusantara." />

  <!-- Tampilan saat dibagikan di media sosial -->
  <meta property="og:title" content="Toko Kopi Nusantara" />
  <meta property="og:description" content="Kopi segar langsung dari petani." />
  <meta property="og:image" content="https://contoh.com/preview.jpg" />
</head>
```

- `<title>` — judul di tab peramban & hasil pencarian (paling penting untuk SEO).
- `description` — ringkasan di hasil pencarian.
- `og:*` (*Open Graph*) — mengatur tampilan tautan saat dibagikan.

## Studi Kasus: Struktur Halaman Berita

Mari susun sebuah **halaman berita** yang sepenuhnya semantik dan aksesibel.

```html title="berita.html"
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Teknologi Web Terbaru — Portal Berita</title>
    <meta name="description"
      content="Berita terkini seputar dunia pengembangan web." />
  </head>

  <body>
    <header>
      <h1>Portal Berita Web</h1>
      <nav aria-label="Navigasi utama">
        <a href="/">Beranda</a>
        <a href="/teknologi">Teknologi</a>
        <a href="/tutorial">Tutorial</a>
      </nav>
    </header>

    <main>
      <article>
        <header>
          <h2>HTML Tetap Relevan di 2026</h2>
          <p><small>Oleh Redaksi · 27 Juli 2026</small></p>
        </header>

        <figure>
          <img src="html.jpg" alt="Layar menampilkan kode HTML berwarna" />
          <figcaption>Ilustrasi kode HTML modern.</figcaption>
        </figure>

        <section>
          <h3>Mengapa Masih Penting?</h3>
          <p>
            Meski banyak kerangka kerja baru, semuanya tetap
            <strong>menghasilkan HTML</strong> pada akhirnya.
          </p>
        </section>

        <section>
          <h3>Kesimpulan</h3>
          <p>Menguasai HTML adalah investasi jangka panjang.</p>
        </section>
      </article>

      <aside aria-label="Berita terkait">
        <h3>Berita Terkait</h3>
        <ul>
          <li><a href="#">Dasar-dasar CSS Modern</a></li>
          <li><a href="#">JavaScript untuk Pemula</a></li>
        </ul>
      </aside>
    </main>

    <footer>
      <p>&copy; 2026 Portal Berita Web. Semua hak dilindungi.</p>
    </footer>
  </body>
</html>
```

Perhatikan: `<header>` bisa muncul lebih dari sekali (satu untuk halaman, satu
untuk artikel), `<nav>` dan `<aside>` diberi `aria-label` agar pembaca layar
tahu perannya, dan hierarki judul turun rapi dari `<h1>` ke `<h3>`.

## Selanjutnya

Anda telah menguasai seluruh fondasi HTML! Saatnya menerapkan semuanya dalam
satu proyek utuh di [Studi Kasus: Landing Page](/html-studi-kasus).
