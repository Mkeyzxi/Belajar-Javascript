// 1. HTML Fragments
// let mhs = {
//     nama: 'mbul',
//     nim: '60200122070'
// }

// let el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nim"> ${mhs.nim}</span>
// </div>`;
// console.log(el)

// 2. Looping

// let mhs = [{
//         nama: 'mbul',
//         nim: '60200122070'
//     },
//     {
//         nama: 'mkeyzxi',
//         nim: '60200122700'
//     },
//     {
//         nama: 'ganteng',
//         nim: '60200122007'
//     }
// ]

// let el = `<div class="mhs">
// ${mhs.map(m => 
// `<ul>
// <li>${m.nama}</li>
// <li>${m.nim}</li>
// </ul>`).join('')}
// </div>`

// 3. Conditional
// ternary operator
// let lagu = {
//     judul: 'Kupu-kupu malam',
//     penyanyi: 'ariel',
//     feat: 'mbul'
// }

// let el = `<div class="mhs">
// <ul>
//     <li>penyanyi : ${lagu.penyanyi}</li>
//     <li>judul : ${lagu.judul} ${lagu.feat ?  `feat ${lagu.feat}`: ''}</li> 
// </ul> </div>` // mengecek jika ada property feat maka akan menambahkan feat dengan operator ternary

// 4. Nested atau HTML Fragment Bersarang
function cetakMatakuliah(matakuliah) {
    return `<ol>
    ${matakuliah.map(e => `<li>${e}</li>`).join('')}
    </ol>`;
}
let mhs = {
    nama: 'mbul',
    semester: 5,
    matkul: ['OAK', 'STATIS', 'MPT', 'SISTER', 'WEB1', 'WEB2', 'BASDA']
}

let el = `<div>
<h2>${mhs.nama}</h2>
<span>${mhs.semester}</span>
<h4>daftar matakuliah</h4>
${cetakMatakuliah(mhs.matkul)}
</div>`
document.body.innerHTML = el;