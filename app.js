// const increment = document.querySelector("#increment");
// const decrement = document.querySelector("#decrement");

// const h2 = document.querySelector("h2");

// let button = 0;

// function charsetColer() {
//   if (button > 0) {
//     h2.style.color = "green";
//   } else if (button < 0) {
//     h2.style.color = "red";
//   } else {
//     h2.style.color = "yellow";
//     const music = new Audio("./music/clock-alarm-8761.mp3");
//     music.play();
//   }
// }

// increment.addEventListener("click", () => {
//   button++;
//   h2.textContent = button;
//   charsetColer();
//   const music = new Audio("./music/mouse-click-153941.mp3");
//   music.play();
// });

// decrement.addEventListener("click", () => {
//   button--;
//   h2.textContent = button;
//   charsetColer();
//   const music = new Audio("./music/click-button-140881.mp3");
//   music.play();
// });

const form = document.querySelector("form");
const inputEl = document.querySelector("input");
const button = document.querySelector("#button1");
const ol = document.querySelector("ol");

button.addEventListener("click", () => {
  ol.innerHTML = "";
  const music = new Audio("./music/mouse-click-153941 (1).mp3");
  music.play();
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  ol.innerHTML += `<li><span>${inputEl.value}</span> <a href=""#>Delite</a></li>  `;
  inputEl.value = "";
  new Audio("./music/37-enter-100035.mp3").play();
});

inputEl.addEventListener("input", () => {
  new Audio("./music/mech-keyboard-02-102918.mp3").play();
});
