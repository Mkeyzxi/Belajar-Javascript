// 1, function literal
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
// function MahasiswaKu(nama, energi) {
//     let mahasiswaKu2 = {}
//     mahasiswaKu2.nama = 'mbul'
//     mahasiswaKu2.umur = 19
//     mahasiswaKu2.energi = 12
//     mahasiswaKu2.cetak = function() {
//         this.energi -= this.umur
//         console.log(`hai namaku ${this.nama} dan umurku ${this.umur} serta energiku ${this.energi}`)
//     }
//     return mahasiswaKu2;
// }

// let mahasiswaku = MahasiswaKu('mbul', '12')

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