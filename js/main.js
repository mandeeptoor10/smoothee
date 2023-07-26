// Function to capture form input when the 'Order' button is clicked
document.getElementById("smoothieOrderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const flavor = document.getElementById("flavor").value;
    const size = document.querySelector("input[name='size']:checked").value;
    const extras = [];
    const extrasInputs = document.querySelectorAll("input[name='extras']:checked");
    extrasInputs.forEach(input => extras.push(input.value));

    // Create a new Smoothie object
    const smoothie = new Smoothie(flavor, size, extras);

    // Display the smoothie description on the HTML page
    const smoothieOutput = document.getElementById("smoothieOutput");
    smoothieOutput.innerHTML = `
        <p><strong>Smoothie Order:</strong></p>
        <p>Flavor: ${smoothie.flavor}</p>
        <p>Size: ${smoothie.size}</p>
        <p>Extras: ${smoothie.extras.join(", ") || "None"}</p>
    `;
});

// Class for Smoothie object
class Smoothie {
    constructor(flavor, size, extras = []) {
        this.flavor = flavor;
        this.size = size;
        this.extras = extras;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const newTodoInput = document.getElementById("newTodo");
    const addTodoButton = document.getElementById("addTodo");
    const todoList = document.getElementById("todoList");

    addTodoButton.addEventListener("click", function () {
        const newTodoText = newTodoInput.value.trim();
        if (newTodoText !== "") {
            createTodoItem(newTodoText);
            newTodoInput.value = "";
        }
    });

    function createTodoItem(text) {
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                listItem.classList.add("completed");
                todoList.appendChild(listItem);
            } else {
                listItem.classList.remove("completed");
                todoList.insertBefore(listItem, todoList.firstChild);
            }
        });

        const todoText = document.createElement("span");
        todoText.textContent = text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(todoText);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    }
});