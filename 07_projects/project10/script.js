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
