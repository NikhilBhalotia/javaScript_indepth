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