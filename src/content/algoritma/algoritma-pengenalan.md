# Pengenalan Algoritma

**Algoritma** adalah jantung dari setiap program. Sebelum mempelajari kerangka
kerja canggih atau pustaka yang rumit, kemampuan menyusun langkah-langkah logis
untuk memecahkan masalah adalah keterampilan yang paling penting untuk dikuasai.

Pada bab ini kita akan memahami apa itu algoritma, cara mengukur efisiensinya,
lalu berlatih dengan **beberapa contoh topik pemrograman** yang klasik pada
sub-bab berikutnya — semuanya menggunakan JavaScript.

## Apa Itu Algoritma?

Algoritma adalah **urutan langkah yang jelas dan terbatas** untuk menyelesaikan
suatu masalah. Bayangkan sebuah resep memasak: ada bahan (masukan/*input*),
langkah-langkah yang harus diikuti, dan hidangan jadi (keluaran/*output*).

Sebuah algoritma yang baik memiliki ciri-ciri berikut:

| Ciri            | Penjelasan                                              |
| --------------- | ------------------------------------------------------- |
| **Jelas**       | Setiap langkah tidak ambigu dan mudah dipahami.         |
| **Terbatas**    | Algoritma harus berhenti setelah sejumlah langkah.      |
| **Masukan**     | Menerima nol atau lebih data sebagai masukan.           |
| **Keluaran**    | Menghasilkan setidaknya satu keluaran.                  |
| **Efektif**     | Setiap langkah dapat benar-benar dijalankan.            |

## Menuangkan Ide Menjadi Kode

Sebelum menulis kode, programmer sering menuliskan **pseudocode** — bahasa
sehari-hari yang menyerupai kode — untuk merancang logikanya lebih dulu.

Contoh, algoritma mencari bilangan terbesar dari sebuah daftar:

```text
1. Anggap angka pertama sebagai yang terbesar.
2. Periksa setiap angka berikutnya satu per satu.
3. Jika angka tersebut lebih besar dari yang terbesar saat ini,
   jadikan ia yang terbesar.
4. Setelah semua diperiksa, itulah bilangan terbesar.
```

Setelah logikanya jelas, barulah kita terjemahkan ke JavaScript. Pseudocode ini
akan kita terapkan menjadi kode nyata pada sub-bab **Pencarian & Pengurutan**.

## Mengukur Efisiensi: Notasi Big-O

Dua algoritma bisa menyelesaikan masalah yang sama, tetapi yang satu jauh lebih
cepat. **Notasi Big-O** menggambarkan bagaimana jumlah langkah bertumbuh seiring
membesarnya data masukan.

| Notasi       | Nama          | Contoh                              |
| ------------ | ------------- | ----------------------------------- |
| `O(1)`       | Konstan       | Mengambil elemen array lewat indeks |
| `O(log n)`   | Logaritmik    | Pencarian biner                     |
| `O(n)`       | Linear        | Pencarian linear                    |
| `O(n log n)` | Linearitmik   | Pengurutan yang efisien             |
| `O(n²)`      | Kuadratik     | *Bubble sort*                       |

Intinya: semakin datar pertumbuhannya, semakin efisien algoritmanya. Kita akan
melihat perbedaan ini secara langsung pada contoh pencarian di sub-bab
berikutnya.

## Peta Bab Ini

Setelah memahami konsep di atas, kita akan berlatih lewat topik klasik yang
dikelompokkan ke dalam sub-bab berikut:

- **Rekursi & Perulangan** — faktorial dan deret Fibonacci.
- **Angka & Teks** — bilangan prima, membalik string, palindrom, dan FizzBuzz.
- **Pencarian & Pengurutan** — nilai terbesar, pencarian linear vs biner,
  *bubble sort*, dan menghapus duplikat.
- **Praktik & Ringkasan** — alur menyelesaikan soal dan rangkuman bab.
