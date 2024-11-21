function toggle(e) {
  const element2 = e.currentTarget;
  const element =  e.currentTarget.nextElementSibling;
  element.classList.toggle("active");
}
const titleEl = document.querySelectorAll(".title");
titleEl.forEach((title) => title.addEventListener("click", toggle));

const bodyEl = document.querySelector("body");
async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((todo) => {
    const todoEl = document.createElement("div");
    const desEl = document.createElement("div");
    todoEl.setAttribute("class", "title");
    desEl.setAttribute("class", "description");

    desEl.textContent = todo.body;

    todoEl.textContent = todo.title;

    bodyEl.appendChild(todoEl);
    bodyEl.appendChild(desEl);
    todoEl.addEventListener("click", toggle);
  });
}

getTodos();
