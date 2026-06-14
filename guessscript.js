let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let prevGuess = [];
let numGuess = 1;

submit.addEventListener('click', function(e){

    e.preventDefault();

    const guess = parseInt(userInput.value);

    if(guess >= 1 && guess <= 100){

        prevGuess.push(guess);

        guesses.innerHTML = prevGuess.join(', ');

        if(guess === randomNumber){

            lowOrHi.innerHTML =
            `<h2>You guessed it right!</h2>`;

        }
        else if(guess < randomNumber){

            lowOrHi.innerHTML =
            `<h2>Number is TOO LOW</h2>`;

        }
        else{

            lowOrHi.innerHTML =
            `<h2>Number is TOO HIGH</h2>`;
        }

        numGuess++;

        remaining.innerHTML = 11 - numGuess;

        userInput.value = '';

        if(numGuess > 10){

            lowOrHi.innerHTML =
            `<h2>Game Over. Number was ${randomNumber}</h2>`;
        }
    }
    else{
        alert("Please enter a number between 1 and 100");
    }

});