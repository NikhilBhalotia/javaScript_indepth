let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let color;
function randomColor() {
  const hex = "0123456789ABCDEF";
  color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[parseInt(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

start.addEventListener("click", () => {
  if (color == null) {
    const newColor = setInterval(() => {
      let color = randomColor();
      document.body.style.backgroundColor = color;
    }, 1000);
    stop.addEventListener("click", () => {
      clearInterval(newColor);
      color = null;
    });
  }
});
