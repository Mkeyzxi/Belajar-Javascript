// cara biasa
let angka = [1, 2, 6, 2, 8, 3, 9, -6, 4, -3, 7, -5]
    // let newAngka = []
    // for (let i = 0; i < angka.length; i++) {
    //     if (angka[i] < 3) {
    //         newAngka.push(angka[i])
    //     }
    // }
    // console.log(newAngka)

// note = semua membuat array baru

// cara menggunakan filter
// filter memfilter dari angka apakah lebih kecil dari 3
// let newAngka = angka.filter(a => a < 3);
// console.log(newAngka)

// cara menggunakan map
// menelusuri angka terus dia return kali 3
// let newAngka = angka.map(a => a * 3);
// console.log(newAngka)

// let newkamu = angka.map(i => angka[i])
// console.log(newkamu)

// cara menggunakan reduce
// melakukan sesuatu terhadap seluruh elemen array yang memiliki 2 parameter
// default 0 + 1 + 2 + 6 + 2 + 8 + 3 + 9 + -6 + 4 + -3 + 7 + -5
// let newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// 5 + 1 + 2 + 6 + 2 + 8 + 3 + 9 + -6 + 4 + -3 + 7 + -5
// let newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// let newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue), 0; // nilai default 2
// console.log(newAngka)



// cari angka > 5
// kalikan 3
// jumlahkan
// cara biasa
// let newAngka = angka.filter(a => a > 5)
// console.log(newAngka)
// newAngka = newAngka.map(a => a * 3)
// console.log(newAngka)
// newAngka = newAngka.reduce((a, b) => a + b)
// console.log(newAngka)

// method chaining
newAngka = angka.filter(a => a > 5).map(a => a * 3).reduce((acc, cur) => acc + cur)
console.log(newAngka)