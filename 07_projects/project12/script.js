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
