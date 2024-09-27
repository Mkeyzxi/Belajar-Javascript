function mahasiswa(nama,energi){
    this.nama = nama,
    this.energi = energi
}

mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi
    return `halo ${this.nama}, selamat makan!`
}
mahasiswa.prototype.main = function(jam){
    this.energi -= jam
    return `halo ${this.nama}, selamat main!`
}
let sandika = new mahasiswa('sandika',5);

console.log(sandika)

sandika.makan(10)

console.log(sandika)
sandika.main(3)

console.log(sandika)
console.log(sandika.main(10))
console.log(sandika.makan(5))
console.log(sandika)
