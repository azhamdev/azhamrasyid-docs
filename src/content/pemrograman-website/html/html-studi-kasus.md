# Studi Kasus: Landing Page

Saatnya menyatukan semua yang telah dipelajari — struktur dokumen, teks, gambar,
tabel, formulir, dan elemen semantik — menjadi **satu proyek utuh**: sebuah
*landing page* untuk kedai kopi bernama **Kopi Nusantara**.

Kita akan membangunnya **bagian demi bagian**, lalu menyusunnya menjadi satu
file HTML yang lengkap di akhir.

## Rencana Halaman

Sebelum menulis kode, tentukan dulu bagian-bagiannya. Ini kebiasaan baik yang
membuat kode lebih terstruktur:

1. **Header** — logo dan menu navigasi.
2. **Hero** — judul besar, ajakan, dan gambar utama.
3. **Menu** — daftar produk dalam bentuk kartu.
4. **Harga** — tabel paket berlangganan.
5. **Kontak** — formulir pemesanan.
6. **Footer** — hak cipta dan tautan sosial.

## Bagian 1 — Header & Navigasi

Gunakan `<header>` untuk kepala halaman dan `<nav>` untuk menu. Setiap tautan
menuju `id` bagian di halaman yang sama.

```html
<header>
  <h1>Kopi Nusantara</h1>
  <nav aria-label="Navigasi utama">
    <a href="#menu">Menu</a>
    <a href="#harga">Harga</a>
    <a href="#kontak">Kontak</a>
  </nav>
</header>
```

## Bagian 2 — Hero

Bagian pembuka yang paling menarik perhatian. Berisi judul, kalimat ajakan,
tombol, dan gambar utama.

```html
<section id="hero">
  <h2>Kopi Segar Langsung dari Petani</h2>
  <p>Nikmati biji kopi pilihan dari seluruh Nusantara, disangrai setiap hari.</p>
  <a href="#kontak">Pesan Sekarang</a>

  <figure>
    <img src="hero-kopi.jpg" alt="Secangkir kopi hitam di atas meja kayu"
      width="600" height="400" loading="lazy" />
  </figure>
</section>
```

## Bagian 3 — Menu Produk

Tiap produk adalah `<article>` mandiri berisi gambar, nama, deskripsi, dan harga.

```html
<section id="menu">
  <h2>Menu Unggulan</h2>

  <article>
    <img src="arabika.jpg" alt="Kopi Arabika Gayo dalam cangkir putih" />
    <h3>Arabika Gayo</h3>
    <p>Asam lembut dengan aroma bunga. Cocok untuk seduhan manual.</p>
    <p><strong>Rp 45.000</strong></p>
  </article>

  <article>
    <img src="robusta.jpg" alt="Kopi Robusta pekat dalam gelas" />
    <h3>Robusta Lampung</h3>
    <p>Pahit tegas dan berbadan tebal. Nikmat dengan susu.</p>
    <p><strong>Rp 38.000</strong></p>
  </article>
</section>
```

## Bagian 4 — Tabel Harga Paket

Gunakan tabel semantik lengkap dengan `<caption>`, `<thead>`, dan `scope`.

```html
<section id="harga">
  <h2>Paket Langganan</h2>

  <table>
    <caption>Harga paket langganan bulanan</caption>
    <thead>
      <tr>
        <th scope="col">Paket</th>
        <th scope="col">Isi</th>
        <th scope="col">Harga / Bulan</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Pemula</th>
        <td>2 bungkus (500 g)</td>
        <td>Rp 80.000</td>
      </tr>
      <tr>
        <th scope="row">Penikmat</th>
        <td>4 bungkus (1 kg)</td>
        <td>Rp 150.000</td>
      </tr>
    </tbody>
  </table>
</section>
```

## Bagian 5 — Formulir Pemesanan

Formulir dengan label, validasi bawaan, dan pengelompokan `<fieldset>`.

```html
<section id="kontak">
  <h2>Pesan Sekarang</h2>

  <form action="/pesan" method="post">
    <fieldset>
      <legend>Data Pemesan</legend>

      <p>
        <label for="nama">Nama</label><br />
        <input type="text" id="nama" name="nama" required />
      </p>
      <p>
        <label for="email">Email</label><br />
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label for="paket">Pilih Paket</label><br />
        <select id="paket" name="paket" required>
          <option value="">— Pilih paket —</option>
          <option value="pemula">Pemula</option>
          <option value="penikmat">Penikmat</option>
        </select>
      </p>
    </fieldset>

    <button type="submit">Kirim Pesanan</button>
  </form>
</section>
```

## Bagian 6 — Footer

```html
<footer>
  <p>&copy; 2026 Kopi Nusantara. Semua hak dilindungi.</p>
  <nav aria-label="Media sosial">
    <a href="#">Instagram</a>
    <a href="#">WhatsApp</a>
  </nav>
</footer>
```

## Kode Lengkap

Berikut seluruh bagian yang digabung menjadi satu file `index.html` yang siap
dibuka di peramban:

```html title="index.html"
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kopi Nusantara — Kopi Segar Setiap Hari</title>
    <meta name="description"
      content="Kedai kopi online dengan biji pilihan dari seluruh Nusantara." />
  </head>

  <body>
    <header>
      <h1>Kopi Nusantara</h1>
      <nav aria-label="Navigasi utama">
        <a href="#menu">Menu</a>
        <a href="#harga">Harga</a>
        <a href="#kontak">Kontak</a>
      </nav>
    </header>

    <main>
      <section id="hero">
        <h2>Kopi Segar Langsung dari Petani</h2>
        <p>
          Nikmati biji kopi pilihan dari seluruh Nusantara, disangrai setiap
          hari.
        </p>
        <a href="#kontak">Pesan Sekarang</a>
        <figure>
          <img src="hero-kopi.jpg"
            alt="Secangkir kopi hitam di atas meja kayu"
            width="600" height="400" loading="lazy" />
        </figure>
      </section>

      <section id="menu">
        <h2>Menu Unggulan</h2>

        <article>
          <img src="arabika.jpg" alt="Kopi Arabika Gayo dalam cangkir putih" />
          <h3>Arabika Gayo</h3>
          <p>Asam lembut dengan aroma bunga. Cocok untuk seduhan manual.</p>
          <p><strong>Rp 45.000</strong></p>
        </article>

        <article>
          <img src="robusta.jpg" alt="Kopi Robusta pekat dalam gelas" />
          <h3>Robusta Lampung</h3>
          <p>Pahit tegas dan berbadan tebal. Nikmat dengan susu.</p>
          <p><strong>Rp 38.000</strong></p>
        </article>
      </section>

      <section id="harga">
        <h2>Paket Langganan</h2>
        <table>
          <caption>Harga paket langganan bulanan</caption>
          <thead>
            <tr>
              <th scope="col">Paket</th>
              <th scope="col">Isi</th>
              <th scope="col">Harga / Bulan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Pemula</th>
              <td>2 bungkus (500 g)</td>
              <td>Rp 80.000</td>
            </tr>
            <tr>
              <th scope="row">Penikmat</th>
              <td>4 bungkus (1 kg)</td>
              <td>Rp 150.000</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="kontak">
        <h2>Pesan Sekarang</h2>
        <form action="/pesan" method="post">
          <fieldset>
            <legend>Data Pemesan</legend>
            <p>
              <label for="nama">Nama</label><br />
              <input type="text" id="nama" name="nama" required />
            </p>
            <p>
              <label for="email">Email</label><br />
              <input type="email" id="email" name="email" required />
            </p>
            <p>
              <label for="paket">Pilih Paket</label><br />
              <select id="paket" name="paket" required>
                <option value="">— Pilih paket —</option>
                <option value="pemula">Pemula</option>
                <option value="penikmat">Penikmat</option>
              </select>
            </p>
          </fieldset>
          <button type="submit">Kirim Pesanan</button>
        </form>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 Kopi Nusantara. Semua hak dilindungi.</p>
      <nav aria-label="Media sosial">
        <a href="#">Instagram</a>
        <a href="#">WhatsApp</a>
      </nav>
    </footer>
  </body>
</html>
```

## Tantangan Lanjutan

Halaman ini masih polos karena murni HTML — dan itu wajar. Untuk mengasah
kemampuan, coba kembangkan sendiri:

- ✅ Tambahkan bagian **"Tentang Kami"** menggunakan `<section>` dan gambar tim.
- ✅ Lengkapi tabel harga dengan paket ketiga dan baris `<tfoot>` berisi catatan.
- ✅ Tambah kolom **nomor telepon** (`type="tel"`) pada formulir.
- ✅ Sisipkan **peta lokasi** dengan `<iframe>` di bagian kontak.

## Ringkasan Modul HTML

Selamat! 🎉 Anda telah menyelesaikan seluruh modul HTML:

1. [Dasar HTML](/html-dasar) — struktur dokumen & tag inti.
2. [Teks, Daftar & Tautan](/html-teks-tautan) — menata isi tulisan.
3. [Gambar & Media](/html-gambar-media) — menyematkan visual & video.
4. [Tabel](/html-tabel) — menyajikan data tabular.
5. [Formulir & Input](/html-form) — menerima masukan pengguna.
6. [Semantik & Aksesibilitas](/html-semantik) — struktur yang bermakna.
7. **Studi Kasus** — menggabungkan semuanya. 👈 Anda di sini.

Fondasi Anda kini kokoh. Langkah berikutnya adalah mempercantik halaman ini
dengan [CSS — Mempercantik Halaman](/css-dasar). Selamat melanjutkan! 🚀
