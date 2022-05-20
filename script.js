'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
	document.querySelector('.message').textContent = message;
}

function setBackground(color) {
	document.querySelector('body').style.backgroundColor = color;
}

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', () => {
	const guess = Number(document.querySelector('.guess').value);

	// When there is no input
	if (!guess) {
		displayMessage('⛔ No number entered!');

		// When Player Wins
	} else if (guess === secretNumber) {
		displayMessage('🎉 Correct Number!');
		setBackground('#60b347');
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('.number').style.width = '30rem';

		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}

		// Guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(
				guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
			);
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('😞 You lose!');
			document.querySelector('.score').textContent = 0;
		}
	}
});

//Restart game
document.querySelector('.again').addEventListener('click', () => {
	// location.reload();
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	console.log(secretNumber);

	document.querySelector('.guess').value = '';
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	setBackground('#222');
	document.querySelector('.number').style.width = '15rem';
	displayMessage('Start guessing...');
});
