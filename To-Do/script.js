const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const descriptionInput = document.getElementById("description");
const startDateInput = document.getElementById("start-date");
const todoTable = document.getElementById("todo-table");
document.addEventListener("DOMContentLoaded", function() {


    // Event listener for the form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the page from refreshing

        // Get values from the input fields
        const task = taskInput.value;
        const description = descriptionInput.value;
        const startDate = startDateInput.value;

        // Call function to add the task to the list
        addTaskToList(task, description, startDate);

        // Clear input fields after submission
        taskInput.value = "";
        descriptionInput.value = "";
        startDateInput.value = "";
    });

    // Function to add the task to the list
    function addTaskToList(task, description, startDate) {
        if (task === "") {
            alert("Task is required!"); // Ensure the task field is not empty
            return;
        }

        // Create a new list item
        // const listItem = document.createElement("li");
        const row=document.createElement("tr")
        todoTable.appendChild(row)

        const td1=document.createElement("td")
        td1.textContent=task;
        row.appendChild(td1)

        const td2=document.createElement("td")
        td2.textContent=description;
        row.appendChild(td2)

        const td3=document.createElement("td")
        td3.textContent=startDate;
        row.appendChild(td3)

        const td4=document.createElement("td")
        row.appendChild(td4)
        const deleteButton = document.createElement("button");
        td4.appendChild(deleteButton)
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            todoTable.removeChild(row); 
        });

    }
})


        // Create a strong element for the task name
        // const taskTitle = document.createElement("strong");
        // taskTitle.textContent = task;

        // Create a paragraph element for the description (if provided)
        // const taskDescription = document.createElement("p");
        // taskDescription.textContent = description ? `Description: ${description}` : "No Description";

        // Create a paragraph element for the start date (if provided)
        // const taskStartDate = document.createElement("p");
        // taskStartDate.textContent = startDate ? `Start Date: ${startDate}` : "No Start Date";

        // Append task title, description, and start date to the list item
        // listItem.appendChild(taskTitle);
        // listItem.appendChild(taskDescription);
        // listItem.appendChild(taskStartDate);

        // Create a delete button for each task
    //     const deleteButton = document.createElement("button");
    //     deleteButton.textContent = "Delete";
        // deleteButton.addEventListener("click", function() {
        //     todoList.removeChild(listItem); // Remove the task when delete is clicked
        // });

    //     // Append the delete button to the list item
    //     listItem.appendChild(deleteButton);

    //     // Add the list item to the to-do list
    //     todoList.appendChild(listItem);
    // }
//});
