# Tabel

**Tabel** dipakai untuk menampilkan data yang tersusun dalam baris dan kolom —
seperti jadwal, daftar harga, atau laporan. Bagian ini membahas cara membangun
tabel yang rapi sekaligus mudah dibaca oleh mesin dan pembaca layar.

> **Penting:** Tabel hanya untuk **data tabular**, bukan untuk mengatur tata
> letak halaman. Untuk menata layout, gunakan CSS (dibahas di bab berikutnya).

## Kerangka Dasar Tabel

Sebuah tabel dibangun dari tiga tag inti:

- `<table>` — pembungkus seluruh tabel.
- `<tr>` (*table row*) — satu baris.
- `<td>` (*table data*) — satu sel data. Untuk sel **kepala**, gunakan `<th>`.

```html
<table>
  <tr>
    <th>Nama</th>
    <th>Umur</th>
    <th>Kota</th>
  </tr>
  <tr>
    <td>Andi</td>
    <td>20</td>
    <td>Bandung</td>
  </tr>
  <tr>
    <td>Budi</td>
    <td>22</td>
    <td>Surabaya</td>
  </tr>
</table>
```

`<th>` (*table header*) otomatis ditebalkan dan menandai sel tersebut sebagai
judul kolom — penting untuk aksesibilitas.

## Bagian Tabel: thead, tbody, tfoot

Untuk tabel yang lebih besar, pisahkan bagian kepala, isi, dan kaki. Ini
memperjelas struktur dan memudahkan penataan dengan CSS nanti.

```html
<table>
  <caption>Nilai Ujian Semester</caption>

  <thead>
    <tr>
      <th>Mata Pelajaran</th>
      <th>Nilai</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Matematika</td>
      <td>90</td>
    </tr>
    <tr>
      <td>Bahasa</td>
      <td>85</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>Rata-rata</th>
      <td>87.5</td>
    </tr>
  </tfoot>
</table>
```

- `<caption>` — judul tabel; sebaiknya selalu ada.
- `<thead>` — baris kepala kolom.
- `<tbody>` — isi utama tabel.
- `<tfoot>` — baris ringkasan seperti total atau rata-rata.

## Menggabungkan Sel

### colspan — menggabungkan kolom

`colspan` membuat satu sel membentang ke beberapa kolom:

```html
<table>
  <tr>
    <th colspan="2">Informasi Kontak</th>
  </tr>
  <tr>
    <td>Email</td>
    <td>halo@contoh.com</td>
  </tr>
  <tr>
    <td>Telepon</td>
    <td>0812-3456-7890</td>
  </tr>
</table>
```

### rowspan — menggabungkan baris

`rowspan` membuat satu sel membentang ke beberapa baris:

```html
<table>
  <tr>
    <th rowspan="2">Senin</th>
    <td>08.00 — Matematika</td>
  </tr>
  <tr>
    <td>10.00 — Bahasa</td>
  </tr>
</table>
```

## Aksesibilitas Tabel

Tambahkan atribut `scope` pada `<th>` untuk memberi tahu pembaca layar apakah
sebuah kepala berlaku untuk **kolom** (`col`) atau **baris** (`row`):

```html
<tr>
  <th scope="col">Produk</th>
  <th scope="col">Harga</th>
</tr>
<tr>
  <th scope="row">Kopi</th>
  <td>Rp 20.000</td>
</tr>
```

## Studi Kasus: Tabel Daftar Harga

Mari bangun **daftar harga paket** lengkap dengan kepala, isi, penggabungan
sel, dan baris total.

```html title="daftar-harga.html"
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Daftar Harga Paket</title>
  </head>
  <body>
    <table>
      <caption>Daftar Harga Paket Internet — Juli 2026</caption>

      <thead>
        <tr>
          <th scope="col">Paket</th>
          <th scope="col">Kecepatan</th>
          <th scope="col">Kuota</th>
          <th scope="col">Harga / Bulan</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">Hemat</th>
          <td>20 Mbps</td>
          <td>Tanpa batas</td>
          <td>Rp 200.000</td>
        </tr>
        <tr>
          <th scope="row">Standar</th>
          <td>50 Mbps</td>
          <td>Tanpa batas</td>
          <td>Rp 350.000</td>
        </tr>
        <tr>
          <th scope="row">Premium</th>
          <td>100 Mbps</td>
          <td>Tanpa batas</td>
          <td>Rp 500.000</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td colspan="3">Semua paket sudah termasuk pemasangan gratis</td>
          <td>Bonus 1 bulan</td>
        </tr>
      </tfoot>
    </table>
  </body>
</html>
```

Perhatikan penggunaan `scope`, `<caption>` yang jelas, dan `colspan` pada
`<tfoot>` untuk menggabungkan catatan promosi. Tabel seperti ini rapi secara
struktur meski belum diberi gaya CSS.

## Selanjutnya

Kini saatnya menerima masukan dari pengguna lewat
[Formulir & Input](/html-form).
