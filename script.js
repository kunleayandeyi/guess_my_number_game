'use strict';
const messageOutputEl = document.querySelector('.message');
console.log(messageOutputEl);
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const againBtnEl = document.querySelector('.again');
const checkBtnEl = document.querySelector('.check');
const inputNumber = document.querySelector('input');
const randomNumberEl = document.querySelector('.number');
const bodyEl = document.querySelector('body');
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let gameScore = 20;
let highScore = 0;
const displayMessage = function (message) {
  messageOutputEl.textContent = message;
};
const displayGameScore = function (score) {
  scoreEl.textContent = score;
};
// listening for an event
checkBtnEl.addEventListener('click', function () {
  let guessedNumber = Number(inputNumber.value);
  if (!guessedNumber) {
    displayMessage('please enter a valid number🤦‍♀️');
  } else if (guessedNumber !== randomNumber) {
    if (gameScore > 1) {
      displayMessage(guessedNumber > randomNumber ? 'too high' : 'too low');
      gameScore = gameScore - 1;
      //persisting the gameScore to reiterate new values
      displayGameScore(gameScore);
    } else {
      gameScore = 0;
      displayMessage('you lost the game');
      displayGameScore(gameScore);
    }
  } else if (guessedNumber === randomNumber) {
    displayMessage('you are correct');
    randomNumberEl.textContent = randomNumber;
    bodyEl.style.backgroundColor = '#60b347';
    randomNumberEl.style.width = '30rem';
    if (gameScore > highScore) {
      highScore = gameScore;
      highScoreEl.textContent = highScore;
    }
  }})

  //!guessedNumber means if guess number is not a valid number
againBtnEl.addEventListener('click', function () {
  gameScore = 20;
  displayMessage('start guessing...');
  randomNumberEl.textContent = '?';
  displayGameScore(gameScore)
  bodyEl.style.backgroundColor = '#222';
  randomNumberEl.style.width = '15rem';
  inputNumber.value = '';
  randomNumber = Math.trunc(Math.random() * 20 + 1);
})