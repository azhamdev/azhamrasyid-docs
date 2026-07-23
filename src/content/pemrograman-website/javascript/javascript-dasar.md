# JavaScript — Menambah Interaktivitas

**JavaScript** adalah bahasa pemrograman yang membuat halaman web menjadi
**interaktif** dan **dinamis**. Dengan JavaScript, halaman bisa merespons klik,
mengubah isi, memvalidasi form, hingga mengambil data dari server.

## Cara Menyisipkan JavaScript

### Di dalam file HTML

```html
<body>
  <!-- konten -->

  <script>
    console.log('Halo dari JavaScript!');
  </script>
</body>
```

### File terpisah (direkomendasikan)

```html
<script src="script.js"></script>
```

## Variabel

Variabel digunakan untuk menyimpan data. Gunakan `let` untuk nilai yang bisa
berubah, dan `const` untuk nilai yang tetap:

```js
let nama = 'Budi';
const tahunLahir = 2000;

nama = 'Ani'; // boleh, karena pakai let
// tahunLahir = 2001; // error, karena pakai const
```

## Tipe Data Dasar

```js
let teks = 'Halo';        // String
let angka = 42;           // Number
let benar = true;         // Boolean
let kosong = null;        // Null
let daftar = [1, 2, 3];   // Array
let objek = { nama: 'Budi', umur: 25 }; // Object
```

## Fungsi

Fungsi adalah blok kode yang bisa dipanggil berkali-kali:

```js
function sapa(nama) {
  return 'Halo, ' + nama + '!';
}

console.log(sapa('Ani')); // Halo, Ani!
```

Versi modern menggunakan *arrow function*:

```js
const sapa = (nama) => `Halo, ${nama}!`;
```

## Percabangan (if / else)

```js
let umur = 18;

if (umur >= 17) {
  console.log('Boleh membuat KTP');
} else {
  console.log('Belum cukup umur');
}
```

## Perulangan (Loop)

```js
for (let i = 1; i <= 5; i++) {
  console.log('Angka ke-' + i);
}
```

## Berinteraksi dengan Halaman (DOM)

**DOM** (*Document Object Model*) memungkinkan JavaScript membaca dan mengubah
elemen HTML.

### Mengambil elemen

```js
const judul = document.querySelector('h1');
```

### Mengubah isi

```js
judul.textContent = 'Judul Baru!';
```

### Merespons klik

```js
const tombol = document.querySelector('button');

tombol.addEventListener('click', () => {
  alert('Tombol diklik!');
});
```

## Contoh Lengkap: Penghitung Klik

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Penghitung</title>
  </head>
  <body>
    <h1 id="angka">0</h1>
    <button id="tambah">Tambah</button>

    <script>
      let hitungan = 0;
      const angka = document.querySelector('#angka');
      const tombol = document.querySelector('#tambah');

      tombol.addEventListener('click', () => {
        hitungan++;
        angka.textContent = hitungan;
      });
    </script>
  </body>
</html>
```

Setiap kali tombol diklik, angka akan bertambah — inilah kekuatan JavaScript!

> **Tips:** Gunakan `console.log()` sesering mungkin untuk memeriksa nilai
> variabel saat belajar. Buka *Developer Tools* (tekan `F12`) untuk melihat
> hasilnya.

## Ringkasan Bab

Selamat! 🎉 Anda telah mempelajari tiga pilar pemrograman web:

- **HTML** untuk struktur
- **CSS** untuk tampilan
- **JavaScript** untuk interaktivitas

Dengan ketiganya, Anda sudah bisa membangun halaman web yang lengkap dan
interaktif. Teruslah berlatih dengan membuat proyek kecil Anda sendiri!
