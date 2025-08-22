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
