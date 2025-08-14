let btn = document.querySelectorAll(".button");
      btn.forEach((val) => {
        val.addEventListener("click", (e) => {
          const attri = val.getAttribute("id");
          document.body.style.backgroundColor = attri;
        });
      });