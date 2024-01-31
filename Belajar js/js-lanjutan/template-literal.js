// let nama = 'mbul'
// let umur = 19
// let energi = 84

// // template literal memiliki string literal dan penggunaan '',"",`` masing-masing memiliki kelebihan yang waw merdeka
// console.log(`halo nama saya ${nama} umurku ${umur} dan energiku ${energi} serta perjumlahan ${umur + energi}`)
// console.log("<div><b>saya ganteng</b>\n <i>saya imut berumur</i>\n</div>")
// console.log(`<div><b>${nama} ganteng, dan berumur ${umur}</b>
// <i>saya imut</i>
// </div>`)

// embedded expresion
// console.log(`${alert('halo nama mbul')}`)

// operator ternari
// let x = 10;
// console.log(`${x <= 10 ? 10 : 15}`)
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`)

let mhs = {
    nama: "muhammad makbul n",
    nim: '60200122070',
    kelas: 'D'
}

let x = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <h3>${mhs.nim}</h3>
    <h4>${mhs.kelas}</h4>
</div>`

console.log(x)