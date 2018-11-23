function dataHandling2(data) {
    data.splice(1, 1, data[1] + ' Elsharawy');
    data.splice(2, 1, 'Provinsi ' + data[2]);
    data.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    console.log(data);

    var tanggal = data[3].split('/');
    for (var i = 0; i < tanggal.length; i++) {
        tanggal[i] = parseInt(tanggal[i]);
    }
    console.log(ubahBulan(tanggal[1]));

    console.log(tanggal.sort(function (a, b) { return b - a; }));

    tanggal = data[3].split('/');
    console.log(tanggal.join('-'));

    console.log(data[1].toString().slice(0, 15));
}

function ubahBulan(bulan) {
    var namaBulan = '';
    switch (bulan) {
        case 1:
            namaBulan = 'Januari';
            break;
        case 2:
            namaBulan = 'Febuari';
            break;
        case 3:
            namaBulan = 'Maret';
            break;
        case 4:
            namaBulan = 'April';
            break;
        case 5:
            namaBulan = 'Mei';
            break;
        case 6:
            namaBulan = 'Juni';
            break;
        case 7:
            namaBulan = 'Juli';
            break;
        case 8:
            namaBulan = 'Agustus';
            break;
        case 9:
            namaBulan = 'September';
            break;
        case 10:
            namaBulan = 'Oktober';
            break;
        case 11:
            namaBulan = 'November';
            break;
        case 12:
            namaBulan = 'Desember';
            break;
    }
    return namaBulan;
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
