# Angka & Teks

Banyak soal algoritma berputar di sekitar dua hal: mengolah **angka** dan
memanipulasi **teks**. Berikut empat masalah klasik yang melatih keduanya.

## Memeriksa Bilangan Prima

Bilangan prima hanya habis dibagi `1` dan dirinya sendiri. Kita cukup menguji
pembagi hingga akar kuadrat `n` agar lebih efisien.

```js title="prima.js"
function apakahPrima(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; // punya pembagi lain
  }
  return true;
}

console.log(apakahPrima(7));  // true
console.log(apakahPrima(12)); // false
```

## Membalik String

Sebuah masalah klasik: membalik urutan huruf pada teks. Ada banyak cara, mari
bandingkan dua di antaranya.

```js title="balik-string.js"
// Cara ringkas — memanfaatkan method bawaan
function balik(teks) {
  return teks.split('').reverse().join('');
}

// Cara manual — memahami logikanya dari dalam
function balikManual(teks) {
  let hasil = '';
  for (let i = teks.length - 1; i >= 0; i--) {
    hasil += teks[i];
  }
  return hasil;
}

console.log(balik('halo'));       // 'olah'
console.log(balikManual('halo')); // 'olah'
```

## Palindrom

**Palindrom** adalah kata yang sama saja dibaca dari depan maupun belakang,
seperti *"katak"* atau *"ini"*. Kita bisa memanfaatkan algoritma pembalik dari
contoh sebelumnya.

```js title="palindrom.js"
function apakahPalindrom(teks) {
  const bersih = teks.toLowerCase();
  const dibalik = bersih.split('').reverse().join('');
  return bersih === dibalik;
}

console.log(apakahPalindrom('Katak')); // true
console.log(apakahPalindrom('rumah')); // false
```

## FizzBuzz

Soal wawancara yang legendaris. Cetak angka `1` sampai `n`, tetapi:
kelipatan `3` diganti `"Fizz"`, kelipatan `5` diganti `"Buzz"`, dan kelipatan
keduanya diganti `"FizzBuzz"`.

```js title="fizzbuzz.js"
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}

fizzBuzz(15);
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
```

> **Perhatikan urutannya:** cek `% 15` harus di awal. Jika `% 3` diperiksa lebih
> dulu, angka seperti `15` akan keburu tercetak `"Fizz"`.
