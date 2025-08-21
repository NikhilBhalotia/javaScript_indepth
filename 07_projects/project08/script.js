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