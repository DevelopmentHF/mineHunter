`use strict`;
// DEFINE SQUARE BUTTONS
const btn0 = null;
const btn1 = document.querySelector(`.square-1`);
const btn2 = document.querySelector(`.square-2`);
const btn3 = document.querySelector(`.square-3`);
const btn4 = document.querySelector(`.square-4`);
const btn5 = document.querySelector(`.square-5`);
const btn6 = document.querySelector(`.square-6`);
const btn7 = document.querySelector(`.square-7`);
const btn8 = document.querySelector(`.square-8`);
const btn9 = document.querySelector(`.square-9`);
const btn10 = document.querySelector(`.square-10`);
const btn11 = document.querySelector(`.square-11`);
const btn12 = document.querySelector(`.square-12`);
const btn13 = document.querySelector(`.square-13`);
const btn14 = document.querySelector(`.square-14`);
const btn15 = document.querySelector(`.square-15`);
const btn16 = document.querySelector(`.square-16`);
const btn17 = document.querySelector(`.square-17`);
const btn18 = document.querySelector(`.square-18`);
const btn19 = document.querySelector(`.square-19`);
const btn20 = document.querySelector(`.square-20`);
const btn21 = document.querySelector(`.square-21`);
const btn22 = document.querySelector(`.square-22`);
const btn23 = document.querySelector(`.square-23`);
const btn24 = document.querySelector(`.square-24`);
const btn25 = document.querySelector(`.square-25`);

// DEFINE SCORE
const score = document.querySelector(`.score`);
let currentScore = 0;

// DEFINE BOX ARRAY
const btns = [
  btn0,
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btn10,
  btn11,
  btn12,
  btn13,
  btn14,
  btn15,
  btn16,
  btn17,
  btn18,
  btn19,
  btn20,
  btn21,
  btn22,
  btn23,
  btn24,
  btn25,
];

// RANDOM MINE ASSIGNING
const generateMinePosition = function () {
  return Math.trunc(Math.random() * 25 + 1);
};

let minePosition1 = generateMinePosition();
let minePosition2 = generateMinePosition();
let minePosition3 = generateMinePosition();

console.log(minePosition1, minePosition2, minePosition3);
/*
// choose the number of mines > create empty array, then loop, each iteration [i] = const rngmine
const promptMines = Number(
  prompt(`How Many Mines Would You Like To Play With?`)
);

const chosenMines = [];

for (let i = 0; i < promptMines; i++) {
  chosenMines.push(generateMinePosition());
}
console.log(chosenMines);
*/
// CLICK FUNCTIONALITY
for (let i = 1; i < btns.length; i++) {
  const addSuccess = function () {
    btns[i].classList.add(`success`);
    btns[i].textContent = `SAFE!`;
    currentScore++;
    score.textContent = `Current Score: ${currentScore}`;
    btns[i].disabled = true;
  };

  const addFail = function () {
    btns[minePosition1].classList.add(`fail`);
    btns[minePosition1].textContent = `FAIL!`;
    btns[minePosition2].classList.add(`fail`);
    btns[minePosition2].textContent = `FAIL!`;
    btns[minePosition3].classList.add(`fail`);
    btns[minePosition3].textContent = `FAIL!`;
    document.querySelector(`.modal`).classList.remove(`hidden`);
    document.querySelector(`.overlay`).classList.remove(`hidden`);
    btns[i].disabled = true;
    score.textContent = `Current Score: ${currentScore - 1}`;
  };

  const addFailRework = function () {
    for (let i = 0; i < chosenMines.length; i++) {
      btns[[chosenMines][i]].classList.add(`fail`);
      btns[[chosenMines][i]].textContent = `FAIL!`;
      document.querySelector(`.modal`).classList.remove(`hidden`);
      document.querySelector(`.overlay`).classList.remove(`hidden`);
      btns[[chosenMines][i]].disabled = true;
      score.textContent = `Current Score: ${currentScore - 1}`;
    }
  };

  btns[i].addEventListener(`click`, addSuccess);
  /*
  for (let i = 0; i < chosenMines.length; i++) {
    btns[[chosenMines][i]].addEventListener(`click`, addFailRework);
  }
  */

  btns[minePosition1].addEventListener(`click`, addFail);
  btns[minePosition2].addEventListener(`click`, addFail);
  btns[minePosition3].addEventListener(`click`, addFail);
}

document.querySelector(`.overlay`).addEventListener(`click`, function () {
  document.querySelector(`.modal`).classList.add(`hidden`);
  document.querySelector(`.overlay`).classList.add(`hidden`);
});

// RELOAD

// Reload everything:
function reload() {
  reload = location.reload();
}
// Event listeners for reload
document.querySelector(".refresh").addEventListener("click", reload, false);
