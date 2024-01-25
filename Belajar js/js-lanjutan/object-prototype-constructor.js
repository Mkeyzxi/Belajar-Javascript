// 3. function constructor
// let mahasiswa = function(saya, kamu) {
//     this.saya = saya;
//     this.kamu = kamu;
// }
// mahasiswa.prototype.cetak = function() {
//     return `saya: ${this.saya}, kamu: ${this.kamu}`;
// }
// mahasiswa.prototype.perkenalan = function() {
//     return `nama saya: ${this.saya}, nama kamu: ${this.kamu}`;
// }
// let mahasiswa2 = new mahasiswa('mbul', 'lia');
// console.log(mahasiswa2)
// console.log(mahasiswa2.cetak())
// console.log(mahasiswa2.perkenalan())

// versi class
class Mahasiswa {
    constructor(saya, kamu) {
        this.saya = saya
        this.kamu = kamu
    }
    cetak() {
        return `saya: ${this.saya}, kamu: ${this.kamu}`;
    }
}

let mahasiswa = new Mahasiswa('mbul', 'kia')