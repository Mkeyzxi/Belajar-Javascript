// desctructuring variabel atau assignment adalah memisahkan nilai nilai pada array ataupun object

// 1. contoh array
// let coba = ['saya', 'kamu', 'kita', 'dia']
// let [a, b, c, d] = coba
// let [a, , , d] = coba // skipping items -> hanya saya dan dia karena kamu dan kita diskip berdasarkan koma
// console.log(a) // saya
// console.log(b) // kamu
// console.log(c) // kita
// console.log(d) // dia
// console.log(coba[0]) // dia

// swap items
// let a = 1;
// let b = 2;
// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);

// return value pada function
// function coba() {
//     return [1, 2]
// }
// let [a, b] = coba();
// // console.log(a[1]) // 2
// console.log(a) // 1

// rest parameter
// let [a, b, c] = [1, 2, 3]; // cara biasa dan biar bisa responsive gunakan cara setelah ini
// let [a, ...values] = [1, 2, 3, 4, 5, 6]
// console.log(a, values.map(a => a))

// 2. contoh object
// let mhs = {
//     nama: 'mbul',
//     umur: 19,
//     semester: 3
// }
// let { nama, umur, semester } = mhs; // isi dari inisial harus sama dengan nama propertynya
// console.log(nama) // mbul
// console.log(umur) // 19
// console.log(semester) // 3 otw 4
//     // console.log(mhs.nama) // mbul

// assigment tanpa deklarasi object
// ({ nama, umur, semester } = { nama: 'mbul', umur: 19, semester: 3 }) // harus menggunakan tanda kurung dan deklarasinya di bagiian kedua
// console.log(nama) // umur

// assign ke variabel baru
// let mhs = {
//         nama: 'mbul',
//         umur: 19,
//         semester: 3
//     }
// let { nama: n, umur: u, semester: s } = mhs;
// console.log(u) // 19

// memberikan nilai degault
let mhs = {
    nama: 'mbul',
    umur: 19,
    semester: 3
}

// let { nama: n, umur: u, semester: s, email: e = 'iniEmailDefault@key.com' } = mhs;
// console.log(e)

// rest parameter

// let { nama, ...value } = mhs;
// console.log(value) // mengembalikan nilai objek pada mhs sisa dari nama

// mengambil field pada objek
function getUmurMHS({ umur }) {
    return umur;
}
console.log(getUmurMHS(mhs));