# CSS — Mempercantik Halaman

**CSS** (*Cascading Style Sheets*) adalah bahasa yang digunakan untuk mengatur
**tampilan** halaman web: warna, huruf, tata letak, jarak, hingga animasi. Jika
HTML adalah kerangka, maka CSS adalah pakaiannya.

## Cara Menulis CSS

Sebuah aturan CSS terdiri dari **selektor** dan **deklarasi**:

```css
selektor {
  properti: nilai;
}
```

Contoh nyata:

```css
h1 {
  color: #2563eb;
  font-size: 32px;
}
```

Artinya: "semua elemen `<h1>` berwarna biru dan berukuran 32 piksel."

## Tiga Cara Menyisipkan CSS

### 1. Inline (langsung pada elemen)

```html
<p style="color: red;">Teks merah</p>
```

### 2. Internal (di dalam `<head>`)

```html
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
```

### 3. Eksternal (file terpisah — paling direkomendasikan)

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```

## Selektor Dasar

```css
/* Berdasarkan nama tag */
p {
  line-height: 1.6;
}

/* Berdasarkan class (diawali titik) */
.tombol {
  background: #2563eb;
}

/* Berdasarkan id (diawali pagar) */
#judul-utama {
  text-align: center;
}
```

Cara memakainya di HTML:

```html
<h1 id="judul-utama">Halo</h1>
<button class="tombol">Klik</button>
```

## Properti yang Sering Dipakai

| Properti           | Fungsi                          |
| ------------------ | ------------------------------- |
| `color`            | Warna teks                      |
| `background`       | Warna atau gambar latar         |
| `font-size`        | Ukuran huruf                    |
| `margin`           | Jarak di luar elemen            |
| `padding`          | Jarak di dalam elemen           |
| `border`           | Garis tepi                      |
| `text-align`       | Perataan teks                   |

Contoh penggunaan:

```css
.kartu {
  background: #f9fafb;
  padding: 20px;
  margin: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}
```

## Tata Letak dengan Flexbox

**Flexbox** memudahkan penataan elemen secara horizontal atau vertikal:

```css
.wadah {
  display: flex;
  justify-content: center; /* rata tengah horizontal */
  align-items: center;     /* rata tengah vertikal */
  gap: 16px;               /* jarak antar elemen */
}
```

## Contoh Lengkap

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Kartu Profil</title>
    <style>
      body {
        font-family: sans-serif;
        background: #f3f4f6;
        display: flex;
        justify-content: center;
        padding: 40px;
      }
      .kartu {
        background: white;
        padding: 24px;
        border-radius: 16px;
        text-align: center;
      }
      .kartu h2 {
        color: #2563eb;
      }
    </style>
  </head>
  <body>
    <div class="kartu">
      <h2>Nama Saya</h2>
      <p>Belajar CSS itu menyenangkan!</p>
    </div>
  </body>
</html>
```

> **Tips:** CSS bersifat *cascading* — jika ada aturan yang bertabrakan,
> aturan yang lebih spesifik dan yang ditulis belakangan biasanya menang.

## Selanjutnya

Lanjut ke [JavaScript — Menambah Interaktivitas](/javascript-dasar) untuk
membuat halaman Anda "hidup".
