// function expression
// let i = function(nama) {
//     return `selamat datang ${nama}`
// }
// console.log(i('mbul'))

// function arrow
// let x = (nama) => {
//     return `selamat datang ${nama}`
// }
// console.log(x('mbul ganteng'))

// function arrow 2 parameter
// let j = (nama, waktu) => {
//     return `selamat ${waktu} ${nama}`
// }
// console.log(j('mbul ganteng', 'malam'))

// function arrow 1 parameter (implisit funtions)
// let k = nama => `selamat ${nama}` // tidak perlu pkai kurung dan tidak perlu pakai return apabila isinya cuma return saja 

// console.log(k('mbul ganteng'))

// tidak mempunya parameter
// let p = () => `hello world`
// console.log(p())

// latihan menampilkan panjang nama
let mahasiswa = ['mbul ganteng', 'lia nualisa', 'kia aisyah putri'];

// cara pertama
console.log(mahasiswa.map(function(nama) {
    return nama.length;
}))

// cara kedua menggunakan arrow funtion
console.log(mahasiswa.map(nama => nama.length))

// cara ketiga membuat menggunakan objek
console.log(mahasiswa.map(nama => ({
    nama,
    panjang: nama.length
})))

// cara ketiga membuat menggunakan objek tapi representasi tabel
console.table(mahasiswa.map(nama => ({
    nama,
    panjang: nama.length
})))

console.log(mahasiswa.map(nama => ([nama]))) // representasi arrow funtion menggunakan array
console.log(mahasiswa.map(nama => ([nama[1]]))) // representasi arrow funtion menggunakan array mengambil huruf perindex