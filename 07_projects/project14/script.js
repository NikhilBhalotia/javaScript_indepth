 const button = document.querySelector('.btn')
      const content = document.querySelector('.header-content')


      button.addEventListener('click',()=>{
        let para = document.createElement('img');
        para.style.width = "200px"
        para.style.height = "200px"
        para.src = `https://cataas.com/cat?random=${Math.floor(Math.random() * 1000)}`
        document.body.appendChild(para);

      })
