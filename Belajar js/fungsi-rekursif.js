// function tanpa rekursif maka akan jadi infinite
// function tanpa_rekursif(nilai) {
//     console.log(nilai)
//     return tanpa_rekursif(nilai - 1);
// }
// tanpa_rekursif(10)

//function denganRekusif
// function denganRekursif(nilai) {
//     console.log(nilai)
//     if (nilai == 0) return;
//     return denganRekursif(nilai - 1);
// }

// denganRekursif(10)


// function faktorial(nilai) {
//     if (nilai == 0) return 1;
//     console.log(nilai)
//     return nilai * faktorial(nilai - 1)
// }
// console.log(faktorial(5))

// function perjumlahan(nilai) {
//     console.log(nilai);
//     if (nilai == 120) {
//         return;
//     }
//     if (nilai == 200) {
//         return nilai;
//     }
//     return perjumlahan(nilai + 1);
// }
// perjumlahan(10)

//buat sorting in javascript eh taunya error, chuaks
// let isi = [23, 4, 5, 3, 13, 5, 2, 1, 5, , 31, 2, 4, 1, 4, , 64, 13, 63, 15];
// for (let i = 0; i < 18; i++) {
//     for (let j = 0; j < isi.length; j++) {
//         if (isi[j] >= isi[j + 1]) {
//             let total = isi[j + 1]
//             isi[j + 1] = isi[j]
//             isi[j] = total
//         }
//     }
// }
// for (let i = 0; i < 18; i++) {
//     console.log(isi[i])
// }

let a = 10;

window.alert(a)