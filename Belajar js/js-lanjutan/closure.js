// clouser adalah sebuah nilai dari global scope yang digunakan di dalam function

// --->  clouser pertama
// function init() {
//     let nama = 'mbul ganteng'

//     function cetakNama() {
//         console.log(nama)
//     }
//     return cetakNama // jika berjalan normal gunakan console.log()
// }

// let iniInit = init()
// iniInit()

// ---> clouser kedua contoh 1
// function init() {
//     function cetakNama(nama) {
//         console.log(nama)
//     }
//     return cetakNama // jika berjalan normal gunakan console.log()
// }

// let iniInit = init()
// iniInit('mbul keren')

// ---> clouser kedua contoh 2

// function init() {
//     return function(nama) {
//         console.log(nama)
//     }
// }

// let iniInit = init()
// iniInit('mbul keren')
// iniInit(nama)

// ---> clouser 2 parameter
// function ucapan(waktu) {
//     return (nama) => {
//         console.log(`halo, selamat ${waktu} kakak ${nama}`)
//     }
// }

// let ucapanPertama = ucapan('siang')
// let ucapanKedua = ucapan('malam')
// let ucapanKetiga = ucapan('pagi')
// ucapanPertama('mbul')
// ucapanKedua('mkeyzxi')
// ucapanKetiga('kia')

// ---> clouser lagi
// let counter = 0;

// function tambahCounter() {
//     return function() {
//         return ++counter;
//     }
// }
// let tambahCounter1 = tambahCounter()
// let tambahCounter2 = tambahCounter()
// let tambahCounter3 = tambahCounter()
// console.log(tambahCounter1());
// console.log(tambahCounter2());
// console.log(tambahCounter3());

// ---> clouser lagi paling op tidak butuh variabel

// let counter = 0;

// let add = function tambahCounter() {
//     return function() {
//         return ++counter;
//     }
// };
// let tambahCounter1 = add();

// console.log(tambahCounter1())
// console.log(tambahCounter1())
// console.log(tambahCounter1())

// ---> clouser lagi paling op tidak butuh variabel
let counter = 0;

let add = (function tambahCounter() {
    return function() {
        return ++counter;
    }
})();

console.log(add())
console.log(add())
console.log(add())