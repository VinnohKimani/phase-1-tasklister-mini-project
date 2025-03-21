document.addEventListener("DOMContentLoaded", () => {
  const myToDosList = [];

  const myTaskForm = document.querySelector("#create-task-form");
  const unorderedListsElement = document.querySelector("#tasks");

  myTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstTaskInput = document.getElementById("new-task-description");
    const taskText = firstTaskInput.value.trim();

    if (taskText !== "") {
      myToDosList.push(taskText);

      renderMyToDoList(myToDosList);

      myTaskForm.reset();
    }
  });

  function renderMyToDoList(mytodos) {
    unorderedListsElement.innerHTML = "";

    mytodos.forEach((mytodos, index) => {
      const li = document.createElement("li");
      li.textContent = mytodos;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.addEventListener("click", () => {
        myToDosList.splice(index, 1);

        renderMyToDoList(myToDosList);
      });

      li.appendChild(deleteButton);

      unorderedListsElement.appendChild(li);
    });
  }
});
