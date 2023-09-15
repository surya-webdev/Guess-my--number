'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '💡Gonna complete it';
document.querySelector('.number').textContent = '5';
document.querySelector('.score').textContent = '9';
document.querySelector('.guess').value = '16';
*/

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// console.log(number);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  // if the guess is wrong
  if (!guess) {
    // document.querySelector('.message').textContent = '😡its not an number!!!';
    displayMessage('😡its not an number!!!');
  }

  // if the guess is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '💡Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 too high' : '📉 too low!!!!';
      displayMessage(guess > secretNumber ? '📈 too high' : '📉 too low!!!!');
      score--; // score= score- 1
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😂You lost the game';
      displayMessage('😂You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // // guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 too high';
  //     score--; // score= score- 1
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😂You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 too low!!!!';
  //     score--; // score= score- 1
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😂You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else {
  //   document.querySelector('.message').textContent = 'Start guessing...';
  // }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
});
