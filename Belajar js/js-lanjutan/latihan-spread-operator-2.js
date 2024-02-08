const h2 = document.querySelector('.animasi h2');
const huruf = [...h2.innerHTML].map((e) => `<span>${e}</span>`).join('')
h2.innerHTML = huruf