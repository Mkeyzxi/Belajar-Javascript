// const parentA = document.getElementById('a');
// const p3 = parentA.querySelector('p.p3');


// function ditekan2() {
//     p2.style.backgroundColor = 'lightgreen';
// }

// function ditekan3() {
//     p3.style.backgroundColor = 'lightgreen';
// }
// const p2 = parentA.querySelector('.p2');
// p2.onclick = ditekan2;

// const p4 = document.getElementsByTagName('p')[3];
// p4.addEventListener('click', function() {
//     p4.style.backgroundColor = 'lightgreen';
//     console.log(p4.textContent = "mbul ganteng");
//     alert('mbul ganteng');
// })
const parentUl = document.getElementsByTagName('ul')[0];

const p = document.getElementsByTagName('li')[0];

p.addEventListener('click', function() {

    const liBaru = document.createElement('li');
    const textBaru = document.createTextNode('item baru');
    liBaru.appendChild(textBaru);
    parentUl.appendChild(liBaru);
    // body.append(parentUl);
})