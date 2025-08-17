## project 1

```javascript

let btn = document.querySelectorAll(".button");
      btn.forEach((val) => {
        val.addEventListener("click", (e) => {
          const attri = val.getAttribute("id");
          document.body.style.backgroundColor = attri;
        });
      });

```

## project 2

```javascript

const form = document.querySelector('form');
    
    form.addEventListener(('submit'),(e)=>{
      e.preventDefault();
      const height = parseInt(document.querySelector('#height').value);
      const weight = parseInt(document.querySelector('#weight').value);
      if(height ===''||height<0||isNaN(height) || weight ==='' || weight<0 || isNaN(weight)){
        const results = document.querySelector('#results');
        results.innerHTML = "Please Enter Valid Input";
        
      }
      else{
        
        const results = document.querySelector('#results');
        results.innerHTML = ((weight/(height*height))*10000).toFixed(2);
      }
    })


```

## project 3

```javascript

const guessNum = document.querySelector("#guessField");
const randomNum = Math.floor((Math.random()*100)+1)

const submit = document.querySelector("#subt");

submit.addEventListener('submit',(e)=>{
    let numberGuessed = guessNum.innerHTML
    
})



```


## project 4

```javascript
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



```

## project 5

```javascript
 let para = document.querySelector("#insert");
      addEventListener("keydown", (e) => {
        para.innerHTML = `<table>
          <tr>
            <th>Key</th>
            <th>Key-Code</th>
            <th>Code</th>
          </tr>
          <tr>
            <td>${e.key === " "?"Space":e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
          </tr>
        </table>`
      });

```

## project 6

```javascript

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let color;
function randomColor() {
  const hex = "0123456789ABCDEF";
  color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[parseInt(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

start.addEventListener("click", () => {
  if (color == null) {
    const newColor = setInterval(() => {
      let color = randomColor();
      document.body.style.backgroundColor = color;
    }, 1000);
    stop.addEventListener("click", () => {
      clearInterval(newColor);
      color = null;
    });
  }
});

```