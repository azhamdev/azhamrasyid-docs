# Gambar & Media

Halaman yang hanya berisi teks terasa kaku. **Gambar, audio, dan video** membuat
halaman lebih hidup dan komunikatif. Bagian ini membahas cara menyematkannya
dengan benar — termasuk agar cepat dimuat dan ramah aksesibilitas.

## Menampilkan Gambar

Tag `<img>` adalah elemen **kosong** (tidak punya tag penutup). Dua atribut
terpentingnya adalah `src` (sumber gambar) dan `alt` (teks alternatif).

```html
<img src="foto-profil.jpg" alt="Foto profil Andi tersenyum" />
```

- `src` — alamat gambar, bisa relatif (`gambar/foto.jpg`) atau absolut (URL).
- `alt` — deskripsi teks yang tampil jika gambar gagal dimuat, **dan** dibacakan
  oleh pembaca layar. Selalu isi dengan deskripsi yang bermakna.

> **Aksesibilitas:** `alt` bukan opsional. Untuk gambar dekoratif yang tidak
> menambah informasi, tetap tulis `alt=""` (kosong) agar pembaca layar
> melewatinya, bukan menghapus atributnya.

### Ukuran & pemuatan malas

Menentukan `width` dan `height` membantu peramban menyediakan ruang sejak awal
sehingga tata letak tidak "meloncat". Atribut `loading="lazy"` menunda pemuatan
gambar sampai hampir terlihat — mempercepat halaman.

```html
<img
  src="pemandangan.jpg"
  alt="Pemandangan gunung saat matahari terbit"
  width="800"
  height="450"
  loading="lazy"
/>
```

### Format gambar yang umum

| Format   | Cocok untuk                         | Catatan                       |
| -------- | ----------------------------------- | ----------------------------- |
| **JPG**  | Foto dengan banyak warna            | Ukuran kecil, ada kompresi    |
| **PNG**  | Gambar dengan latar transparan      | Kualitas tajam, ukuran besar  |
| **WebP** | Foto & grafis modern                | Lebih kecil, didukung luas    |
| **SVG**  | Ikon & logo (grafik vektor)         | Tajam di semua ukuran layar   |

## Gambar dengan Keterangan

Gunakan `<figure>` dan `<figcaption>` saat gambar butuh keterangan resmi:

```html
<figure>
  <img src="grafik-penjualan.png" alt="Grafik penjualan naik tiap kuartal" />
  <figcaption>Gambar 1. Tren penjualan sepanjang tahun 2025.</figcaption>
</figure>
```

## Gambar Responsif

Agar gambar hemat data di ponsel namun tajam di layar besar, gunakan `srcset`
untuk menyediakan beberapa ukuran. Peramban memilih yang paling sesuai.

```html
<img
  src="foto-800.jpg"
  srcset="foto-400.jpg 400w, foto-800.jpg 800w, foto-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, 800px"
  alt="Produk unggulan"
/>
```

Untuk mengganti gambar sepenuhnya di kondisi tertentu (misalnya potret vs
lanskap), gunakan `<picture>`:

```html
<picture>
  <source media="(max-width: 600px)" srcset="banner-mobile.jpg" />
  <source media="(min-width: 601px)" srcset="banner-desktop.jpg" />
  <img src="banner-desktop.jpg" alt="Banner promo akhir tahun" />
</picture>
```

## Audio

```html
<audio controls>
  <source src="lagu.mp3" type="audio/mpeg" />
  <source src="lagu.ogg" type="audio/ogg" />
  Peramban Anda tidak mendukung audio.
</audio>
```

Atribut yang berguna: `controls` (tombol putar), `loop` (mengulang), `muted`
(bisu), dan `autoplay` (putar otomatis — gunakan dengan bijak).

## Video

```html
<video controls width="640" poster="cuplikan.jpg">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  Peramban Anda tidak mendukung video.
</video>
```

- `poster` — gambar yang tampil sebelum video diputar.
- Menyediakan beberapa `<source>` membuat video tetap bisa diputar di berbagai
  peramban.

## Menyematkan Konten Luar (iframe)

`<iframe>` menyematkan halaman lain — seperti peta atau video YouTube — ke dalam
halaman Anda.

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/kode-video"
  title="Video tutorial"
  allowfullscreen
></iframe>
```

## Studi Kasus: Kartu Produk

Mari gabungkan gambar, keterangan, dan teks menjadi sebuah **kartu produk** yang
biasa dijumpai di toko online.

```html title="kartu-produk.html"
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Kartu Produk</title>
  </head>
  <body>
    <article>
      <figure>
        <img
          src="sepatu.jpg"
          alt="Sepatu lari warna biru tampak samping"
          width="320"
          height="240"
          loading="lazy"
        />
        <figcaption>Sepatu Lari Seri Aero</figcaption>
      </figure>

      <h2>Sepatu Lari Aero</h2>
      <p>
        Ringan dan nyaman untuk lari harian. Tersedia dalam
        <strong>3 warna</strong>.
      </p>
      <p><strong>Rp 450.000</strong> <del>Rp 600.000</del></p>

      <a href="/produk/aero" download="katalog.pdf">Unduh katalog</a>
    </article>
  </body>
</html>
```

Sebuah kartu produk yang baik selalu memiliki: gambar dengan `alt` deskriptif,
nama, deskripsi singkat, harga, dan ajakan bertindak (*call to action*).

## Selanjutnya

Data yang rapi butuh **tabel**. Lanjut ke [Tabel](/html-tabel).
