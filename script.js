'use strict';

const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1")
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const roll = document.querySelector(".btn--roll");
const dice = document.querySelector('.dice');
const hold = document.querySelector(".btn--hold");
const reset = document.querySelector(".btn--new")
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");


function changePlayer() {
  if (player0.classList.contains("player--active")) { 
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
  } else {
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
  }
};

function unLucky() {
  player0.classList.contains("player--active") ? current0.textContent = 0 : current1.textContent = 0;
  changePlayer();
};

function rollDice() {
  const ran = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = `dice-${ran}.png`;
  ran === 1 ? unLucky() : addScore(ran);
};
  
function checkScore() {
  if (Number(score0.textContent) >= 100) {
    alert("Player 0 wins");
  }
  if (Number(score1.textContent) >= 100) {
    alert("Player 1 wins");
  }
};

function addScore(ran) {
  if (player0.classList.contains("player--active")) {
    current0.textContent = Number(current0.textContent) + ran;
  } else {
    current1.textContent = Number(current1.textContent) + ran;
  }
};

function resets() {
  dice.classList.add("hidden");
  score0.textContent = 0;
  score1.textContent = 0;
  !player0.classList.contains("player--active") && changePlayer(); 
};

function holdScore() {
  if (player0.classList.contains("player--active")) {
    score0.textContent = Number(score0.textContent) + Number(current0.textContent);
    current0.textContent = 0;
  } else {
    score1.textContent = Number(score1.textContent) + Number(current1.textContent);
    current1.textContent = 0;
  }
  checkScore();
  changePlayer();
};

roll.addEventListener("click", rollDice);
hold.addEventListener("click", holdScore);
reset.addEventListener("click", resets);