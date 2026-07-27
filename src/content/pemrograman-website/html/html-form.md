# Formulir & Input

**Formulir** (*form*) adalah cara pengguna mengirim data ke sebuah website —
mulai dari login, pendaftaran, hingga kolom pencarian. Bagian ini membahas
elemen-elemen form dan cara membuatnya benar serta mudah diakses.

## Kerangka Formulir

Semua kolom isian dibungkus oleh tag `<form>`:

```html
<form action="/proses" method="post">
  <!-- kolom-kolom isian di sini -->
  <button type="submit">Kirim</button>
</form>
```

- `action` — alamat tujuan pengiriman data.
- `method` — cara pengiriman: `get` (data tampil di URL, untuk pencarian) atau
  `post` (data tersembunyi, untuk data sensitif seperti kata sandi).

## Input dan Label

Elemen `<input>` adalah kolom isian serbaguna; jenisnya ditentukan atribut
`type`. Setiap input **wajib** dipasangkan dengan `<label>` agar jelas dan
ramah pembaca layar.

```html
<label for="nama">Nama Lengkap</label>
<input type="text" id="nama" name="nama" />
```

Kaitannya: nilai `for` pada label harus **sama** dengan `id` pada input. Dengan
begitu, mengklik label akan langsung memfokuskan kolomnya.

## Jenis-Jenis Input

```html
<input type="text" placeholder="Teks biasa" />
<input type="email" placeholder="nama@email.com" />
<input type="password" placeholder="Kata sandi" />
<input type="number" min="1" max="100" />
<input type="date" />
<input type="tel" placeholder="0812xxxx" />
<input type="url" placeholder="https://..." />
<input type="range" min="0" max="10" />
<input type="color" />
<input type="file" />
```

| Type       | Kegunaan                              |
| ---------- | ------------------------------------- |
| `text`     | Teks satu baris                       |
| `email`    | Alamat email (divalidasi otomatis)    |
| `password` | Kata sandi (disamarkan)               |
| `number`   | Angka dengan batas min/max            |
| `date`     | Pemilih tanggal                       |
| `checkbox` | Pilihan boleh banyak                  |
| `radio`    | Pilihan hanya satu                    |
| `file`     | Unggah berkas                         |

### Pilihan: checkbox dan radio

**Checkbox** untuk memilih beberapa opsi sekaligus:

```html
<label><input type="checkbox" name="hobi" value="baca" /> Membaca</label>
<label><input type="checkbox" name="hobi" value="musik" /> Musik</label>
```

**Radio** untuk memilih satu saja. Agar saling meniadakan, gunakan `name` yang
sama:

```html
<label><input type="radio" name="gender" value="l" /> Laki-laki</label>
<label><input type="radio" name="gender" value="p" /> Perempuan</label>
```

## Area Teks & Dropdown

Untuk teks panjang gunakan `<textarea>`, dan untuk pilihan dari daftar gunakan
`<select>`:

```html
<label for="pesan">Pesan</label>
<textarea id="pesan" name="pesan" rows="4"
  placeholder="Tulis pesan Anda..."></textarea>

<label for="kota">Kota</label>
<select id="kota" name="kota">
  <option value="">— Pilih kota —</option>
  <option value="bdg">Bandung</option>
  <option value="sby">Surabaya</option>
  <option value="jkt">Jakarta</option>
</select>
```

## Validasi Bawaan

HTML dapat memvalidasi isian **tanpa JavaScript** melalui atribut berikut:

```html
<input type="email" required />           <!-- wajib diisi -->
<input type="text" minlength="3" maxlength="20" />
<input type="number" min="17" max="60" />
<input type="text" pattern="[0-9]{5}" title="Masukkan 5 digit angka" />
```

- `required` — kolom tidak boleh kosong.
- `minlength` / `maxlength` — batas panjang teks.
- `min` / `max` — batas nilai angka.
- `pattern` — pola yang harus dipenuhi (regular expression).

Atribut lain yang berguna: `placeholder` (teks petunjuk), `disabled` (nonaktif),
`readonly` (hanya baca), dan `value` (nilai awal).

## Mengelompokkan dengan fieldset

`<fieldset>` mengelompokkan isian yang berkaitan, dan `<legend>` memberinya
judul:

```html
<fieldset>
  <legend>Data Diri</legend>
  <label for="depan">Nama depan</label>
  <input type="text" id="depan" name="depan" />
</fieldset>
```

## Studi Kasus: Formulir Pendaftaran

Mari bangun **formulir pendaftaran** lengkap yang menerapkan label, berbagai
jenis input, validasi, pengelompokan, dan tombol kirim.

```html title="pendaftaran.html"
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Formulir Pendaftaran</title>
  </head>
  <body>
    <h1>Formulir Pendaftaran Peserta</h1>

    <form action="/daftar" method="post">
      <fieldset>
        <legend>Data Diri</legend>

        <p>
          <label for="nama">Nama Lengkap</label><br />
          <input type="text" id="nama" name="nama"
            placeholder="Nama sesuai KTP" required />
        </p>

        <p>
          <label for="email">Email</label><br />
          <input type="email" id="email" name="email"
            placeholder="nama@email.com" required />
        </p>

        <p>
          <label for="lahir">Tanggal Lahir</label><br />
          <input type="date" id="lahir" name="lahir" required />
        </p>
      </fieldset>

      <fieldset>
        <legend>Preferensi</legend>

        <p>
          Jenis kelamin:
          <label><input type="radio" name="gender" value="l" required />
            Laki-laki</label>
          <label><input type="radio" name="gender" value="p" />
            Perempuan</label>
        </p>

        <p>
          <label for="kelas">Pilih Kelas</label><br />
          <select id="kelas" name="kelas" required>
            <option value="">— Pilih kelas —</option>
            <option value="html">Dasar HTML</option>
            <option value="css">Dasar CSS</option>
            <option value="js">Dasar JavaScript</option>
          </select>
        </p>

        <p>
          <label for="catatan">Catatan tambahan</label><br />
          <textarea id="catatan" name="catatan" rows="4"
            placeholder="Opsional"></textarea>
        </p>

        <p>
          <label>
            <input type="checkbox" name="setuju" required />
            Saya menyetujui syarat dan ketentuan
          </label>
        </p>
      </fieldset>

      <button type="submit">Daftar Sekarang</button>
      <button type="reset">Bersihkan</button>
    </form>
  </body>
</html>
```

Formulir ini sudah **fungsional dan tervalidasi** meski tanpa CSS atau
JavaScript: peramban akan menolak pengiriman bila email tidak valid, kolom
wajib kosong, atau kotak persetujuan belum dicentang.

## Selanjutnya

Terakhir dalam fondasi HTML: menata halaman secara bermakna dengan
[Semantik & Aksesibilitas](/html-semantik).
