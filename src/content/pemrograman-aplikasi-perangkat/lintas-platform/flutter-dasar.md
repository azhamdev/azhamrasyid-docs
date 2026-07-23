# Dasar Flutter (Lintas Platform)

**Flutter** adalah *framework* buatan Google untuk membangun aplikasi yang
berjalan di **banyak platform** — Android, iOS, Web, Windows, macOS, dan Linux —
hanya dari **satu basis kode**. Flutter menggunakan bahasa pemrograman **Dart**.

## Mengapa Lintas Platform?

Bayangkan Anda harus membuat aplikasi untuk Android *dan* iOS. Dengan pendekatan
native, Anda menulis **dua kode berbeda**. Dengan Flutter, cukup **satu kode**:

- ⏱️ Hemat waktu pengembangan.
- 💰 Hemat biaya.
- 🎨 Tampilan konsisten di semua perangkat.

## Perangkat yang Dibutuhkan

- **Flutter SDK** — unduh dari [flutter.dev](https://flutter.dev).
- **Editor** — VS Code atau Android Studio (dengan plugin Flutter).
- **Emulator** atau perangkat asli untuk mencoba aplikasi.

Setelah terpasang, periksa kesiapan lingkungan dengan:

```bash
flutter doctor
```

## Konsep Inti: Semuanya Adalah Widget

Di Flutter, **semua** yang ada di layar adalah **widget** — mulai dari teks,
tombol, gambar, hingga tata letak. Widget disusun bertingkat seperti pohon.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const AplikasiSaya());
}

class AplikasiSaya extends StatelessWidget {
  const AplikasiSaya({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Aplikasi Pertama')),
        body: const Center(
          child: Text('Halo, Flutter! 💙'),
        ),
      ),
    );
  }
}
```

Penjelasan singkat:

- `runApp()` — menjalankan aplikasi.
- `Scaffold` — kerangka dasar halaman (punya *app bar*, *body*, dll.).
- `Center` & `Text` — widget untuk menata dan menampilkan teks.

## StatelessWidget vs. StatefulWidget

Ada dua jenis widget utama:

| Jenis               | Kapan Digunakan                          |
| ------------------- | ---------------------------------------- |
| **StatelessWidget** | Tampilan **tetap**, tidak berubah        |
| **StatefulWidget**  | Tampilan **berubah** (mis. saat diklik)  |

## Contoh: Aplikasi Penghitung

Berikut widget yang memiliki *state* (nilai yang bisa berubah):

```dart
class Penghitung extends StatefulWidget {
  const Penghitung({super.key});

  @override
  State<Penghitung> createState() => _PenghitungState();
}

class _PenghitungState extends State<Penghitung> {
  int angka = 0;

  void tambah() {
    setState(() {
      angka++; // memicu pembaruan tampilan
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text('Angka: $angka'),
        ElevatedButton(
          onPressed: tambah,
          child: const Text('Tambah'),
        ),
      ],
    );
  }
}
```

Kunci utamanya adalah `setState()` — memberi tahu Flutter bahwa data berubah,
sehingga tampilan digambar ulang secara otomatis.

## Menjalankan Aplikasi

Dari dalam folder proyek, jalankan:

```bash
flutter run
```

Flutter akan membangun dan menjalankan aplikasi di emulator atau perangkat yang
terhubung.

> **Tips:** Fitur **Hot Reload** (tekan `r` saat aplikasi berjalan) menerapkan
> perubahan kode dalam hitungan detik **tanpa** memulai ulang aplikasi. Ini
> membuat pengembangan terasa sangat cepat dan menyenangkan!

## Latihan

Buat aplikasi **"Kartu Profil"** dengan Flutter:

1. Tampilkan sebuah `Text` berisi nama Anda.
2. Tambahkan `Text` kedua berisi hobi Anda.
3. Bungkus keduanya dalam widget `Card` agar tampak rapi.

## Ringkasan Bab

Selamat! 🎉 Anda telah mengenal tiga cara membangun aplikasi perangkat:

- **Android** — aplikasi mobile native dengan Kotlin.
- **Desktop** — aplikasi komputer dengan Electron.
- **Flutter** — satu kode untuk banyak platform dengan Dart.

Setiap pendekatan punya kelebihannya masing-masing. Pilih yang paling sesuai
dengan kebutuhan proyek Anda, lalu teruslah berlatih! 🚀
