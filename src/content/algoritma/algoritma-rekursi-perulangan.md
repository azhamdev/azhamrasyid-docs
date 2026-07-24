# Rekursi & Perulangan

Dua cara paling mendasar untuk mengulang langkah adalah **perulangan** (*loop*)
dan **rekursi** (fungsi yang memanggil dirinya sendiri). Mari kita pahami
keduanya lewat dua masalah klasik.

## Faktorial

Faktorial dari `n` (ditulis `n!`) adalah hasil kali semua bilangan bulat dari
`1` hingga `n`. Misalnya `5! = 5 × 4 × 3 × 2 × 1 = 120`.

### Dengan perulangan

```js title="faktorial-loop.js"
function faktorial(n) {
  let hasil = 1;
  for (let i = 2; i <= n; i++) {
    hasil *= i;
  }
  return hasil;
}

console.log(faktorial(5)); // 120
```

### Dengan rekursi

**Rekursi** adalah fungsi yang memanggil dirinya sendiri. Ia butuh
*base case* — kondisi berhenti — agar tidak berputar selamanya.

```js title="faktorial-rekursi.js"
function faktorial(n) {
  if (n <= 1) return 1; // base case
  return n * faktorial(n - 1); // memanggil diri sendiri
}

console.log(faktorial(5)); // 120
```

> **Tips:** Setiap solusi rekursif bisa ditulis ulang dengan perulangan, dan
> sebaliknya. Pilih yang paling mudah dibaca untuk masalah Anda.

## Deret Fibonacci

Pada deret Fibonacci, setiap angka adalah jumlah dari dua angka sebelumnya:
`0, 1, 1, 2, 3, 5, 8, 13, ...`

```js title="fibonacci.js"
function fibonacci(jumlah) {
  const deret = [0, 1];
  for (let i = 2; i < jumlah; i++) {
    deret[i] = deret[i - 1] + deret[i - 2];
  }
  return deret.slice(0, jumlah);
}

console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
```
