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
      console.log(typeof height);
      console.log(weight);
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
console.log(randomNum);

const submit = document.querySelector("#subt");

submit.addEventListener('submit',(e)=>{
    let numberGuessed = guessNum.innerHTML
    console.log(numberGuessed);
    
})



```