# Dasar Aplikasi Android

**Android** adalah sistem operasi mobile paling populer di dunia. Aplikasi
Android modern umumnya dibangun menggunakan bahasa **Kotlin** dan perangkat
pengembangan resmi bernama **Android Studio**.

## Perangkat yang Dibutuhkan

- **Android Studio** — IDE resmi dari Google yang sudah berisi semua yang Anda
  perlukan (editor, emulator, dan alat *build*).
- **JDK (Java Development Kit)** — biasanya sudah disertakan Android Studio.
- **Emulator** atau **ponsel Android** untuk menjalankan aplikasi.

## Struktur Proyek Android

Sebuah proyek Android memiliki beberapa berkas dan folder penting:

| Bagian                | Fungsi                                     |
| --------------------- | ------------------------------------------ |
| `AndroidManifest.xml` | Identitas & izin aplikasi                  |
| `res/`                | Sumber daya: gambar, teks, tata letak      |
| `MainActivity.kt`     | Kode utama (logika) sebuah layar           |
| `build.gradle`        | Konfigurasi & daftar pustaka (*library*)   |

## Bahasa Kotlin

Kotlin adalah bahasa modern yang ringkas dan aman. Berikut contoh dasarnya:

```kotlin
fun main() {
    val nama = "Andi"
    println("Halo, $nama!")

    // Perulangan sederhana
    for (i in 1..3) {
        println("Hitungan ke-$i")
    }
}
```

Beberapa hal penting:

- `val` — variabel yang **tidak bisa** diubah (konstan).
- `var` — variabel yang **bisa** diubah.
- `$nama` — cara menyisipkan nilai variabel ke dalam teks.

## Activity: Layar Aplikasi

Setiap layar dalam aplikasi Android biasanya diwakili oleh sebuah **Activity**.
Inilah titik masuk saat aplikasi dijalankan:

```kotlin
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}
```

Penjelasan:

- `onCreate()` — fungsi yang dipanggil pertama kali saat layar dibuat.
- `setContentView()` — menentukan tata letak (*layout*) yang ditampilkan.

## Membuat Tampilan (Layout)

Tampilan Android tradisional ditulis dengan **XML**. Contoh tombol dan teks:

```xml
<LinearLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp">

    <TextView
        android:id="@+id/salam"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Halo, Dunia!" />

    <Button
        android:id="@+id/tombol"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Klik Saya" />
</LinearLayout>
```

## Menanggapi Interaksi Pengguna

Menghubungkan tombol dengan aksi di Kotlin:

```kotlin
val tombol = findViewById<Button>(R.id.tombol)
val salam = findViewById<TextView>(R.id.salam)

tombol.setOnClickListener {
    salam.text = "Tombol ditekan! 🎉"
}
```

> **Tips:** Android modern kini menganjurkan **Jetpack Compose** — cara membuat
> tampilan langsung dari kode Kotlin tanpa XML. Namun memahami dasar XML tetap
> berguna untuk membaca proyek lama.

## Latihan

Coba buat aplikasi sederhana bernama **"Penghitung Klik"**:

1. Tampilkan sebuah angka yang dimulai dari `0`.
2. Tambahkan sebuah tombol bertuliskan "Tambah".
3. Setiap kali tombol ditekan, angka bertambah `1`.

Ini melatih tiga konsep sekaligus: tampilan, variabel, dan interaksi.

## Selanjutnya

Lanjut ke [Dasar Aplikasi Desktop](/desktop-dasar) untuk melihat bagaimana
aplikasi dibuat untuk komputer.
