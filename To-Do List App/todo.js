// Get the task input and task list elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Array to store the tasks
let tasks = [];

// Function to render the tasks
function renderTasks() {
  // Clear the task list
  taskList.innerHTML = '';

  // Render each task
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    
    // Create a button to mark the task as completed
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
      markTaskAsCompleted(index);
    });
    li.appendChild(completeButton);

    // Create a button to remove the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeTask(index);
    });
    li.appendChild(removeButton);

    // Add the task item to the list
    taskList.appendChild(li);
  });
}

// Function to add a new task
function addTask() {
  const task = taskInput.value.trim();
  if (task !== '') {
    tasks.push(task);
    taskInput.value = '';
    renderTasks();
  }
}

// Function to mark a task as completed
function markTaskAsCompleted(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Function to remove a task
function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
