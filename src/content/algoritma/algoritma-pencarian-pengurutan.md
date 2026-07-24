# Pencarian & Pengurutan

Mencari dan mengurutkan data adalah dua operasi paling sering dipakai dalam
pemrograman. Di sinilah efisiensi yang kita bahas pada bab pengenalan terasa
nyata.

## Mencari Nilai Terbesar

Menerapkan pseudocode yang kita rancang di bab **Pengenalan Algoritma** menjadi
kode nyata.

```js title="nilai-terbesar.js"
function cariTerbesar(daftar) {
  let terbesar = daftar[0];
  for (const angka of daftar) {
    if (angka > terbesar) {
      terbesar = angka;
    }
  }
  return terbesar;
}

console.log(cariTerbesar([3, 9, 1, 7, 4])); // 9
```

## Pencarian Linear vs Biner

Ini menunjukkan langsung dampak efisiensi yang kita bahas di bagian Big-O pada
bab pengenalan.

**Pencarian linear** memeriksa setiap elemen satu per satu — `O(n)`:

```js title="pencarian-linear.js"
function cariLinear(daftar, target) {
  for (let i = 0; i < daftar.length; i++) {
    if (daftar[i] === target) return i; // ketemu, kembalikan indeks
  }
  return -1; // tidak ditemukan
}

console.log(cariLinear([10, 20, 30, 40], 30)); // 2
```

**Pencarian biner** hanya bekerja pada data yang **sudah terurut**, tetapi jauh
lebih cepat karena separuh data dibuang di tiap langkah — `O(log n)`:

```js title="pencarian-biner.js"
function cariBiner(daftar, target) {
  let kiri = 0;
  let kanan = daftar.length - 1;

  while (kiri <= kanan) {
    const tengah = Math.floor((kiri + kanan) / 2);
    if (daftar[tengah] === target) return tengah;
    if (daftar[tengah] < target) kiri = tengah + 1; // buang paruh kiri
    else kanan = tengah - 1; // buang paruh kanan
  }
  return -1;
}

console.log(cariBiner([10, 20, 30, 40, 50], 40)); // 3
```

## Bubble Sort

Algoritma pengurutan paling sederhana untuk dipahami: berulang kali menukar dua
elemen bersebelahan yang salah urutan hingga seluruh data rapi.

```js title="bubble-sort.js"
function bubbleSort(daftar) {
  const angka = [...daftar]; // salin agar array asli tidak berubah
  for (let i = 0; i < angka.length - 1; i++) {
    for (let j = 0; j < angka.length - 1 - i; j++) {
      if (angka[j] > angka[j + 1]) {
        // tukar posisi keduanya
        [angka[j], angka[j + 1]] = [angka[j + 1], angka[j]];
      }
    }
  }
  return angka;
}

console.log(bubbleSort([5, 2, 8, 1, 9, 3])); // [1, 2, 3, 5, 8, 9]
```

> **Catatan:** *Bubble sort* bagus untuk belajar, tetapi lambat (`O(n²)`).
> Di dunia nyata, gunakan `array.sort()` bawaan JavaScript yang jauh lebih cepat.

## Menghapus Duplikat

Menghitung frekuensi dan membuang elemen ganda adalah tugas sehari-hari.
JavaScript modern menyediakan `Set` yang membuatnya sangat ringkas.

```js title="hapus-duplikat.js"
function hapusDuplikat(daftar) {
  return [...new Set(daftar)];
}

console.log(hapusDuplikat([1, 2, 2, 3, 3, 3, 4])); // [1, 2, 3, 4]
```

Untuk menghitung berapa kali tiap elemen muncul, kita bisa memakai objek:

```js title="hitung-frekuensi.js"
function hitungFrekuensi(daftar) {
  const jumlah = {};
  for (const item of daftar) {
    jumlah[item] = (jumlah[item] || 0) + 1;
  }
  return jumlah;
}

console.log(hitungFrekuensi(['a', 'b', 'a', 'c', 'a']));
// { a: 3, b: 1, c: 1 }
```
