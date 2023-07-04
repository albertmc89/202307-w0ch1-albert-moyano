let counter = document.querySelector(".counter");
let buttonIncrement = document.querySelector(".button__increment");
let buttondecrement = document.querySelector(".button__decrement");
let buttonreset = document.querySelector(".button__reset");

let count = 0;
let limit = 20;

buttonIncrement.addEventListener("click", () => {
  if (count < limit) {
    count++;
  } else if (count >= limit) {
  }
  restartDisplay();
});

buttondecrement.addEventListener("click", () => {
  if (count > 0) {
    count--;
  } else if (count <= 0) {
  }
  restartDisplay();
});

buttonreset.addEventListener("click", () => {
  count = 0;
  restartDisplay();
});

function restartDisplay() {
  counter.innerHTML = count;
}
restartDisplay();
