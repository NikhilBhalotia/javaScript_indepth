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