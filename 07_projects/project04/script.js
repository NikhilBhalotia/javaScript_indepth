let guessingField = document.querySelector("#guessField");
let submitguess = document.querySelector("#subt");
let remainGuesses = document.querySelector(".lastResult");
let previousGuesses = document.querySelector(".guesses");
let output = document.createElement("p");


let previousGuessesArray = [];
let currentGuess = 0;

let playGame = true;

if (playGame) {
  let randomNumber = parseInt(Math.random() * 100 + 1);
  submitguess.addEventListener("click", (val) => {
    console.log(randomNumber);
    val.preventDefault();
    let guessNumber = parseInt(guessingField.value);
    checkNumber(guessNumber,randomNumber);
    guessingField.value = "";
  });
}

function checkNumber(guessNumber,randomNumber) {
  if (guessNumber === randomNumber) {
    updateArray(guessNumber);
    updateHtml(
      guessNumber,
      `Congratulations!! You Won the game and the guessed number is ${guessNumber}`
    );
    endGame();
  } else if (currentGuess === 9) {
    updateHtml(guessNumber, "You Lose the Game");
    endGame();
  } else if (guessNumber < 1 || guessNumber > 100) {
    output.innerHTML = `Enter a Number between 1 and 100`;
  } else if (guessNumber < randomNumber) {
    updateArray(guessNumber);
    updateHtml(guessNumber, "Your Number is Too Low");
  } else if (guessNumber > randomNumber) {
    updateArray(guessNumber);
    updateHtml(guessNumber, "Your Number is too high");
  }
}

function endGame() {
  playGame = false;
  submitguess.disabled = true;
  newGame();
}


let newButton = document.createElement("button");
newButton.innerText = "New Game";
document.querySelector(".resultParas").append(newButton);

function newGame() {

newButton.addEventListener('click',(e)=>{
    newButton.disabled = true;
    submitguess.disabled =false;
    playGame = true;
    previousGuesses.innerHTML ="";
    remainGuesses.innerHTML = 10;

})
}

function updateArray(guessNumber) {
  //  previousGuessesArray.push(guessNumber)
  // previousGuesses.innerHTML = previousGuessesArray

  previousGuesses.innerHTML = previousGuesses.innerHTML + guessNumber + " ";
  console.log(previousGuessesArray);
}

function updateHtml(guessNumber, text) {
  currentGuess++;
  remainGuesses.innerHTML = `${10 - currentGuess}`;
  remainGuesses.appendChild(output);
  output.innerHTML = `${text}`;
}
