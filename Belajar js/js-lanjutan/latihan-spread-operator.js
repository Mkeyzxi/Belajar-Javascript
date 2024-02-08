const nama = document.querySelector('.nama')
let huruf = [...nama.innerHTML].map(e => `<span>${e}</span>`).join('')
console.log(huruf)
nama.innerHTML = huruf;
console.log(huruf)