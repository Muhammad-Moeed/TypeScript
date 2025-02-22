const tasks = [
    { id: 1, name: "Question 1: Basic Types and Interfaces", details: "This is the input/output for Task 1." },
    { id: 2, name: "Question 2: Union Types and Type Guards", details: "This is the input/output for Task 2." },
    { id: 3, name: "Question 3: Classes and Inheritance", details: "This is the input/output for Task 3." },
    { id: 4, name: "Question 4: Access Modifiers and Getters/Setters", details: "This is the input/output for Task 4." },
    { id: 5, name: "Question 5: Abstract Classes", details: "This is the input/output for Task 5." },
    { id: 6, name: "Question 6: Types and Interfaces - Creating and Using Interfaces", details: "This is the input/output for Task 6." },
    { id: 7, name: "Question 7: Class Inheritance - Extending a Base Class", details: "This is the input/output for Task 7." },
    { id: 8, name: "Question 8: Access Modifiers - Using Private, Protected, and Readonly", details: "This is the input/output for Task 8." },
    { id: 9, name: "Question 9: Union Types and Type Guards", details: "This is the input/output for Task 9." },
    { id: 10, name: "Question 10: Abstract Classes - Creating and Extending", details: "This is the input/output for Task 10." },
    { id: 11, name: "Question 11: Generics - Creating a Generic Function with Index Search", details: "This is the input/output for Task 11." },
    { id: 12, name: "Question 12: Type Guards - Checking Object Types", details: "This is the input/output for Task 12." },
    { id: 13, name: "Question 13: Interface Intersection - Merging Multiple Interfaces", details: "This is the input/output for Task 13." },
    { id: 14, name: "Question 14: Interface Union - Handling Multiple Object Types", details: "This is the input/output for Task 14." },
    { id: 15, name: "Question 15: Implementing an Interface in a Class", details: "This is the input/output for Task 15." },
];

const completedTasksList = document.getElementById("completedTasks");
const totalTasks = document.getElementById("totalTasks");
const lastTask = document.getElementById("lastTask");
const completedTasksSection = document.getElementById("completedTasksSection");
const taskDetailsSection = document.getElementById("taskDetailsSection");
const taskDetailsTitle = document.getElementById("taskDetailsTitle");
const taskDetailsContent = document.getElementById("taskDetailsContent");
const statistics = document.querySelector('.statistics'); // Use querySelector

// Show Task Section
function showTask() {
    if (statistics) {
        statistics.style.display = "none";
    }
    completedTasksList.innerHTML = "";
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span onclick="showTaskDetails(${task.id})">${task.name}</span>
        `;
        completedTasksList.appendChild(li);
    });
    updateStatistics();
}

// Show task details
function showTaskDetails(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        taskDetailsTitle.textContent = task.name;
        taskDetailsContent.innerHTML = `
            <p>${task.details}</p>
            <h3 class="image-heading">Input</h3>
            <img src="./images/task${taskId}-input.PNG" alt="Task ${taskId} Input">
            <h3 class="image-heading">Output</h3>
            <img src="./images/task${taskId}-output.PNG" alt="Task ${taskId} Output">
        `;
        completedTasksSection.style.display = "none";
        taskDetailsSection.style.display = "block";
    }
}

function updateStatistics() {
    totalTasks.textContent = tasks.length;
    lastTask.textContent = tasks.length > 0 ? tasks[tasks.length - 1].name : "None";
}

function showHome() {
    if (statistics) {
        statistics.style.display = "block"; 
    }
    completedTasksSection.style.display = "none";
    taskDetailsSection.style.display = "none";
}

function showTasks() {
    showTask();
    completedTasksSection.style.display = "block";
    taskDetailsSection.style.display = "none";
}

showTask();
showHome(); 

