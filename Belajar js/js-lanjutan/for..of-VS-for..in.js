// for of adalah menelusuri objek-objek yang iterable object.
// iterable object antara lain string, array, arguments / nodelist, TypedArray, map, set, user defined literable
// for in adalah menelusuri over enumerable (property padaobjek)


// contoh for of
// -> array
// const mhs = ['mbul', 'dito', 'lia', 'kia', 'lisa']

// for (const i of mhs) {
//     console.log(i);
// }

// -> string
// const nama = 'mbul ganteng'
// for (const i of nama) {
//     console.log(i);
// }

// const mhs = ['mbul', 'dito', 'lia', 'kia', 'lisa']
// for (const [m, i] of mhs.entries()) {
//     console.log(m, i); // menampilkan cuma isi dari array jika ingin ada indexnya tambahkan methd entries  lalu bisa definisikan variabel melalui 2 variabel dengan teknik desctructuring
// }

// -> node list
// let liNama = document.body.querySelectorAll('li.nama');
// // liNama.forEach(e => console.log(e.innerHTML));
// for (const e of liNama) {
//     console.log(e.innerHTML);
// }

// -> arguments 
// --> jika parameter tidak diberikan difunction dan ketika dipanggil lalu diberikan nilai diparameter maka otomatis masuk di arguments
// function jumlahAngka() {
//     let jumlah = 0;
//     for (let i of arguments) {
//         jumlah += i
//     }
//     return jumlah
// }
// console.log(jumlahAngka(1, 2, 3, 4))

// for in di objek

let mhs = {
    nama: 'mbul',
    kelas: 'd',
    nomor: '085342811312'
}

for (let i in mhs) {
    console.log(mhs[i])
}