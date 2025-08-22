const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");

const addBook = document.querySelector(".btn");
const table = document.querySelector(".table");
addBook.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value === "" || author.value === "" || year.value === "") {
    alert("Please fill in all fields");
    return;
  }
  let newSection = document.createElement("section");
  newSection.classList.add("table-section");
  newSection.innerHTML = `<div>${title.value}</div>
                         <div>${author.value}</div>
                         <div>${year.value}</div>
        <button class="delete-btn">Delete</button>`;

  table.appendChild(newSection);
  title.value = "";
  author.value = "";
  year.value = "";

  const deleteBtn = newSection.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    newSection.remove();
  });
});
