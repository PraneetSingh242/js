const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoItemsContainer = document.getElementById("todo-items-container");
const clearBtn = document.getElementById("clear-btn");

addBtn.addEventListener("click", () => {
  const value = todoInput.value.trim();
  const delButton = document.createElement("button");
  delButton.innerText = "X";

  //  Check if input value is empty
  if (value === "") {
    return;
  }

  const li = document.createElement("li");
  li.innerText = value;

  // Append the list item to the container
  todoItemsContainer.appendChild(li);

  // Append the delete button to the list item
  li.appendChild(delButton);

  // Clear input field
  todoInput.value = "";

  delButton.addEventListener("click", function () {
    li.remove();
  });
  
});

// Clear all todo items from the container
clearBtn.addEventListener("click", () => {
  for (
    let index = todoItemsContainer.children.length - 1;
    index >= 0;
    index--
  ) {
    todoItemsContainer.children[index].remove();
  }
});
