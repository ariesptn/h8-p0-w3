/**
Kompetensi: Conditional

Implementasikan pseudocode yang kamu telah buat di nomor 1 menjadi sintaks javascript.

**/

// SKELETON CODE (Code Sample)

var umur = 10; // silakan berikan nilai bebas
var tinggi = 151; // silakan berikan nilai bebas
//tambahkan variable lain jika diperlukan

var harga = 0;
if (umur >= 2 && umur <= 3) {
    harga = 20000;
    if (tinggi > 70) {
        harga += 10000;
    }
} else if (umur >= 4 && umur <= 7) {
    harga = 35000;
    if (tinggi > 120) {
        harga += 15000;
    }
} else if (umur >= 8 && umur <= 10) {
    harga = 50000;
    if (tinggi > 150) {
        harga += 20000;
    }
}
console.log(harga);
