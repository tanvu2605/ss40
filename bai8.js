const tasks = [];

function addTask() {
  const task = document.querySelector("#task").value;

  if (!task) {
    return;
  }

  tasks.push(task);

  document.querySelector("#todo-list").innerHTML += `
    <li>
      ${task}
      <button class="delete">Xóa</button>
    </li>
  `;
}

function deleteTask(index) {
  tasks.splice(index, 1);

  document.querySelector("#todo-list").innerHTML = tasks
    .map((task) => {
      return `
      <li>
        ${task}
        <button class="delete">Xóa</button>
      </li>
    `;
    })
    .join("");
}

document.querySelector("#add").addEventListener("click", addTask);

document.querySelector("#todo-list").addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const index = event.target.parentElement.index;
    deleteTask(index);
  }
});

tasks = JSON.parse(localStorage.getItem("tasks"));

document.querySelector("#todo-list").innerHTML = tasks
  .map((task) => {
    return `
    <li>
      ${task}
      <button class="delete">Xóa</button>
    </li>
  `;
  })
  .join("");