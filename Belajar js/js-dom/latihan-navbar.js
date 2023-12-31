const parent = document.querySelector('header');
const ul = parent.querySelector('ul');
let i = 0;
parent.addEventListener('click', function() {
    i++;
    if (i % 2 === 1) {
        ul.style.display = 'block';
    } else if (i % 2 === 0) {
        ul.style.display = 'none';
    }

})

const main = document.getElementsByTagName('main')[0];

main.addEventListener('click', () => {
    main.setAttribute('class', 'kota');
    alert("indonesiaS")
})

const indonesia = document.querySelector("footer .indonesia");

document.addEventListener('scroll', function() {
    // Lakukan sesuatu saat terjadi scroll
    document.style.backgroundColor = 'green';
});

window.addEventListener('scroll', function() {
    var scrollValue = parseInt(window.scrollY);
    console.log('Scroll Value:', scrollValue);
});