// 1, function literal
// tidak efektif dengan object yang banyak
// let mahasiswaku = {
//         nama: 'mbul',
//         umur: '19',
//         energi: 12,
//         cetak: function() {
//             let pengurangan = this.umur - this.energi;
//             console.log(`hai namaku ${this.nama} dan umurku ${this.umur} serta energiku ${this.energi} jika dikurangkan maka ${pengurangan}`)
//         }
//     }
// 2. function deklarasion
// penulisan pertama kurang efektif karena mengelolah 2 objek
let methodcetak = { // membuat method terpisah karena biar apabila dipanggil tidak otomatis dijalankan
    cetak: function() {
        this.energi -= this.umur
        console.log(`hai namaku ${this.nama} dan umurku ${this.umur} serta energiku ${this.energi}`)
    }
}

// function MahasiswaKu(nama, energi) {
//     let mahasiswaKu2 = {}
//     mahasiswaKu2.nama = 'mbul'
//     mahasiswaKu2.umur = 19
//     mahasiswaKu2.energi = 12
//     mahasiswaKu2.cetak = methodcetak.cetak // memanggil objek dari method cetak
//     return mahasiswaKu2;
// }

// let mahasiswaku = MahasiswaKu('mbul', '12')
// penulisan kedua memakai Object.create(mengacu nama parent yang digunakan)
function MahasiswaKu(nama, energi) {
    let mahasiswaKu2 = Object.create(methodcetak)
    mahasiswaKu2.nama = 'mbul'
    mahasiswaKu2.umur = 19
    mahasiswaKu2.energi = 12 // tidak perlu menfadtar dari method kedua
    return mahasiswaKu2;
}

let mahasiswaku = MahasiswaKu('mbul', '12')
    // 3. function constructor
    // let mahasiswa = function(saya, kamu) {
    //     this.saya = saya;
    //     this.kamu = kamu;
    //     this.cetak = function() {
    //         console.log(`saya: ${saya}, kamu: ${kamu}`);
    //     }
    // }
    // let mahasiswa2 = new mahasiswa('kita', 'mereka');
    // console.log(mahasiswa2)

// 4. object create
// files selanjutnya