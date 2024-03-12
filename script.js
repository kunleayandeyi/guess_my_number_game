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

//console.log(inputNumber);
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let gameScore = 20;
let highScore = 0;
//let guessedNumber = Number(inputNumber.value);
// listening for an event
checkBtnEl.addEventListener('click', function () {
  let guessedNumber = Number(inputNumber.value);
  if (!guessedNumber) {
    messageOutputEl.textContent = 'please enter a valid number🤦‍♀️';
  } else if (guessedNumber > randomNumber) {
    if (gameScore > 1) {
      messageOutputEl.textContent = 'too high';
      gameScore = gameScore - 1;
      //persisting the gameScore to reiterate new values
      scoreEl.textContent = gameScore;
    } else {
      gameScore = 0;
      messageOutputEl.textContent = 'you lost the game';
      scoreEl.textContent = gameScore;
    }
  } else if (guessedNumber < randomNumber) {
    /*messageOutputEl.textContent = 'too low';
    gameScore=gameScore-1
    scoreEl.textContent=gameScore
    //scoreEl.textContent=15*/
    if (gameScore > 1) {
      messageOutputEl.textContent = 'too low';
      gameScore = gameScore - 1;
      //persisting the gameScore to reiterate new values
      scoreEl.textContent = gameScore;
    } else {
      gameScore = 0;
      messageOutputEl.textContent = 'you lost the game';
      scoreEl.textContent = gameScore;
    }
  } else if (guessedNumber === randomNumber) {
    messageOutputEl.textContent = 'you are correct';
    randomNumberEl.textContent = randomNumber;
    //highScoreEl.textContent = gameScore;
    //againBtnEl.textContent='YOU WON!'
    bodyEl.style.backgroundColor = '#60b347';
    randomNumberEl.style.width = '30rem';
    if (gameScore > highScore) {
      highScore = gameScore;
      highScoreEl.textContent = highScore;
      console.log(highScore);
    }
  }
  //!guessedNumber means if guess number is not a valid number
  /* if (guessedNumber === randomNumber) {
    messageOutputEl.textContent = 'you are correct';*/
  console.log(randomNumber);
});
//the again button
againBtnEl.addEventListener('click', function () {
  gameScore = 20;
  messageOutputEl.textContent = 'start guessing...';
  randomNumberEl.textContent = '?';
  scoreEl.textContent = gameScore;
  //againBtnEl.textContent='YOU WON!'
  bodyEl.style.backgroundColor = '#222';
  randomNumberEl.style.width = '15rem';
  inputNumber.value = '';
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  //!guessedNumber means if guess number is not a valid number
  /* if (guessedNumber === randomNumber) {
    messageOutputEl.textContent = 'you are correct';*/
  //console.log(randomNumber);
});
