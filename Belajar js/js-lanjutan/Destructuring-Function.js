// function aritmatika(a, b) {
// return [a * b, a + b];
// return [a + b, a - b, a * b];
// }
// let semua = aritmatika(3, 4);
// let tambah = aritmatika(3, 4)[0];
// let kali = aritmatika(3, 4)[1];
// console.log(kali);

// memakai cara desctucturing pemisahan
// const [tambah, kali] = aritmatika(2, 3);
// console.log(tambah, kali);
// const [tambah, kurang, kali, bagi = 'tidak ada'] = aritmatika(2, 3);
// console.log(bagi);

// desctucturing return value
// function kalkulasi(a, b) {
//     return { tambah: a - b, kurang: a - b };
// }
// let { kurang, tambah } = kalkulasi(2, 3);
// console.log(kurang)

// desctururing function argument
let mhs1 = {
    nama: "mbul ganteng",
    kelas: 'D',
    semester: 4,
    nilai: {
        ip: 3.75,
        ipk: 3.86
    }
}

// // -> cara biasa
// function cetakMHS(nama, kelas) {
//     return `halo nama saya ${nama}  berasal dari kelas ${kelas}`
// }

// let mbul = cetakMHS(mhs1.nama, mhs1.kelas)
// console.log(mbul)

// // -> cara luar biasa
// function cetakMHS({ nama, kelas }) {
//     return `halo nama saya ${nama}  berasal dari kelas ${kelas}`
// }

// let mbul = cetakMHS(mhs1)
// console.log(mbul)

// -> cara luar biasa tambahan nilai kompleks
function cetakMHS({ nama, kelas, nilai: { ip, ipk } }) {
    return `halo nama saya ${nama}  berasal dari kelas ${kelas} nilai saya ${ipk} dan ${ip}`
}

let mbul = cetakMHS(mhs1)
console.log(mbul)