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

## project 7

```javascript

let scrollDiv = document.querySelector(".scroll-indicator")
      let progressbar = document.querySelector(".progress")

      window.addEventListener("scroll",(e)=>{
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // current scroll position
      const scrollTop = window.scrollY;
      
      // percentage scrolled
      const progress = (scrollTop / scrollHeight) * 100;
        progressbar.style.width = progress+"%"
        
        
      })

```

## project 8

```javascript

 let typedTextSpan = document.querySelector(".typed-text")
      let cursorSpan = document.querySelector(".cursor")
      let array = ["a competitive language","very easy to understand","Awesome","Powerful", "Fun"]
      let arrayIndex =0;
      let wordIndex = 0;
      let erasingDealy = 50;
      let typedealy = 150;
      let nextTextDealy =500;

      let currWord = array[arrayIndex]
      
function type(){


  if(wordIndex<array[arrayIndex].length){
        typedTextSpan.innerText += array[arrayIndex].charAt(wordIndex);
        wordIndex++;  
        setTimeout(type,typedealy)
    
      }
      else{
        setTimeout(erase, nextTextDealy);
      }
      
    }

    function erase(){
      if(wordIndex>0){
        typedTextSpan.innerText = currWord.substring(0,wordIndex-1)
        wordIndex--;
        setTimeout(erase,erasingDealy)
      }
      else{
        arrayIndex++;
        if(arrayIndex>=array.length){
          arrayIndex=0;
        }
        setTimeout(type,typedealy+500)
      }
    }

    addEventListener('DOMContentLoaded',()=>{
      if (array.length) setTimeout(type, nextTextDealy + 250);

    })

```

## project 9

```javascript
let button = document.querySelector("button")
let cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

button.addEventListener("mouseenter", () => {
  cursor.classList.add("cursor-grow");
});

button.addEventListener("mouseleave", () => {
  cursor.classList.remove("cursor-grow");
});

```

## project 10

```javascript
 let emojis = [
  "🤣","😒","👍","😂","🤣","😊","😍","👌","😘","💕",
  "😁","🙌","😎","🙂","🤗","🤩","😑","🤨","🫡","😶‍🌫️",
  "😏","😣","😥","😮","😭","😦","🤯","🥶","🥵","🥳",
  "🤡","🤠"
];
      let emoji = document.getElementById("emoji");

      let length = emojis.length
      emoji.addEventListener('mouseenter',()=>{

        let randomEmoji = emojis[Math.floor(Math.random()*length)]
        emoji.textContent = randomEmoji
        emoji.style.filter = "none";
        
      })

      emoji.addEventListener('mouseleave',()=>{
        emoji.style.filter = "grayscale(100%)"

      })

```


## project 11

```javascript
let inputfield = document.querySelector("#input-field");
      let uppercase = document.querySelector(".uppercase");
      let lowercase = document.querySelector(".lowercase");
      let capitalize = document.querySelector(".capitalize");
      let bold = document.querySelector(".bold");
      let italic = document.querySelector(".italic");
      let underline = document.querySelector(".underline");
      let outputfield = document.querySelector("#output-field");

      function showOutput(output,change) {
          outputfield.innerHTML = output;
          outputfield.style.backgroundColor = "skyblue";
          inputfield.value = "";
          change.style.backgroundColor = "rgb(60, 59, 60)";

      }

      //  upperCase

      uppercase.addEventListener("click", () => {
        let output = inputfield.value.toUpperCase();
        uppercase.style.backgroundColor = "green";
        showOutput(output,uppercase)
      });

      //  lowerCase

      lowercase.addEventListener("click", () => {
        let output = inputfield.value.toLowerCase();
        lowercase.style.backgroundColor = "green";
        showOutput(output,lowercase)
      });

      //  capitalize

      capitalize.addEventListener("click", () => {
        let letter = inputfield.value;
        let output = letter.charAt(0).toUpperCase() + letter.slice(1);
        capitalize.style.backgroundColor = "green";
        showOutput(output,capitalize)
      });

      //  bold

      bold.addEventListener("click", () => {
        let output = inputfield.value;
        bold.style.backgroundColor = "green";
          outputfield.innerHTML = `<b>${output}</b>`;
          outputfield.style.backgroundColor = "skyblue";
          inputfield.value = "";
          change.style.backgroundColor = "rgb(60, 59, 60)";
        
      });

      //  italic

      italic.addEventListener("click", () => {
        let output = inputfield.value;
        italic.style.backgroundColor = "green";
          outputfield.innerHTML = `<i>${output}</i>`;
          outputfield.style.backgroundColor = "skyblue";
          inputfield.value = "";
          change.style.backgroundColor = "rgb(60, 59, 60)";
       
      });

      //  underline

      underline.addEventListener("click", () => {
        let output = inputfield.value;
        underline.style.backgroundColor = "green";
          outputfield.innerHTML = output
          outputfield.style.textDecoration = "underline"
          outputfield.style.backgroundColor = "skyblue";
          inputfield.value = "";
          change.style.backgroundColor = "rgb(60, 59, 60)";
      });

```

## project 12

```javascript
let button = document.querySelector("button");
      let content = document.querySelector(".content");
      
      function getRandomImage() {
        let image = document.createElement("img");
        image.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;
        content.appendChild(image);
      }

      for (let i = 0; i < 6; i++) {
        getRandomImage();
      }

      button.addEventListener("click", () => {
        for (let i = 0; i < 3; i++) {
          getRandomImage();
        }
      });

```

## project 13

```javascript
 
      let button = document.querySelector('.btn')
      let displayjoke = document.querySelector('#display-joke')

      const jokes = [
        "Why don’t scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don’t skeletons fight each other? They don’t have the guts.",
        "What do you call fake spaghetti? An impasta!",
        "Why can’t your nose be 12 inches long? Because then it would be a foot!",
        "What did one ocean say to the other ocean? Nothing, they just waved.",
        "Why did the math book look sad? Because it had too many problems.",
        "Why don’t eggs tell jokes? They’d crack each other up.",
        "How does a penguin build its house? Igloos it together!",
        "Why did the computer go to the doctor? Because it caught a virus.",
      ];

      button.addEventListener("click",()=>{
        displayjoke.innerHTML = jokes[Math.floor(Math.random()*jokes.length)]

      })
```

## project 14

```javascript

 const button = document.querySelector('.btn')
      const content = document.querySelector('.header-content')


      button.addEventListener('click',()=>{
        let para = document.createElement('img');
        para.style.width = "200px"
        para.style.height = "200px"
        para.src = `https://cataas.com/cat?random=${Math.floor(Math.random() * 1000)}`
        document.body.appendChild(para);

      })

```

## project 15

```javascript

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");

const addBook = document.querySelector(".btn");
const table = document.querySelector(".table");
addBook.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value === "" || author.value === "" || year.value === "") {
    alert("Please fill in all fields");
    return;
  }
  let newSection = document.createElement("section");
  newSection.classList.add("table-section");
  newSection.innerHTML = `<div>${title.value}</div>
                         <div>${author.value}</div>
                         <div>${year.value}</div>
        <button class="delete-btn">Delete</button>`;

  table.appendChild(newSection);
  title.value = "";
  author.value = "";
  year.value = "";

  const deleteBtn = newSection.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    newSection.remove();
  });
});


```
