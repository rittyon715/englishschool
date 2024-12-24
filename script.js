// let nav = document.querySelector("#navi");
// let btn = document.querySelector(".hamburger");

// btn.onclick = () => {
//     nav.classList.toggle("active");
// }

// btn.onclick = () => {
//     btn.classList.toggle("active");
// }

"use strict";

document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector("#navi").classList.toggle("active");
});

document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".hamburger").classList.toggle("active");
});

// フワっと出てくるjs
