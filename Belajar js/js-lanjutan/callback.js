// callback adalah function yang dikirimkan sebagai parameter function yang lain
// syncronous callback

// cara 1
// function halo(nama) {
//     alert(`halo, ${nama}`);
// }
// function tampilkanPesan(callback) {
//     const nama = prompt('masukkan nama kamu : ')
//     callback(nama);
// }
// tampilkanPesan(halo)

// cara 2
function tampilkanPesan(callback) {
    const nama = prompt('masukkan nama kamu : ')
    callback(nama);
}
tampilkanPesan(nama => alert(`halo, ${nama}`))