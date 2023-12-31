// DOM selection
// getelementById()
const judul = document.getElementById("judul");
judul.style.color = "red"
judul.style.textShadow = "20px 20px 20px red";
judul.innerHTML = "MbuL Ganteng";

// html collection
const p = document.getElementsByTagName("p")
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "lightgreen";
}
const h1 = document.getElementsByTagName("h1")[0];
h1.style.backgroundColor = "green";

// document.getElementsByClassName("")
// -> html collection
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "MbuL Ganteng dirubah di js";