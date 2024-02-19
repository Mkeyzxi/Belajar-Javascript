// Asynchronous adalah urutan eksekusi yang dapat mengeksekusi sebuah program tanpa harus menyelesaikan terlebih dahulu
// dalam browser ada V8 engine yang mana terbagi 2 yaitu heap dan stact, heap itu tempat pembacaaan fungsi dll, sdngkn stack tmpt pengeksekusian program setelah itu hilang jika sdh selesai


// function kompelksbingit() {
//     return ' anggap aja functionnnya rumit seperti json yg membutuhkan waktu'
// }
// // contoh blocking
// console.log('satu'); // pertama dijalankan dan masuk di stack setelah selsai dieksekusi ditampilkan lalu dihilangkan
// kompelksbingit() // kedua sehingga butuh waktu untuk menjalanka yang ketia
// console.log('tiga') // ketiga


// cara mengatasi agar yang kompleks itu diskip terlebih dahulu adalah dibawah

console.log('satu') // satu
setTimeout(() => { // tiga
    console.log('dua') // ketiga muncul dikarenakan ada delay 2000 detik baru ditampilkan sedangkan yang lain dijalakn setlh setTimeout sdh dieksekusi
}, 2000)
console.log('tiga') // dua


// setTimeout(() => {
//     window.alert('indonesia')
// }, 5000)

// bisa lihat alurnya di web : http://latentflip.com/loupe/
