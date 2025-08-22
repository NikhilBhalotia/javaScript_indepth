 
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
