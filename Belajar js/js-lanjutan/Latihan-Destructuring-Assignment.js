let saya = {
    nama: 'muhammad makbul n',
    kelas: 'Kuliah woy',
    semester: 4

};

// let { kelas, nama, semester } = saya

// function cetakObjek(parameter) {
//     return saya[parameter];
// }

// console.log(cetakObjek("nama"))

// let kita = 'nama'
// console.log(saya[kita])

// menukar nilai pada objek
[saya.kelas, saya.nama, saya.semester] = [saya.semester, saya.kelas, saya.nama]
console.log(saya.nama)