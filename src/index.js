document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById('new-task-description');
  const newTaskPriority = document.getElementById('new-task-priority');

  const newTaskUl = document.getElementById('tasks');
  
  //Event listeners here
  newTaskForm.addEventListener('submit', createNewTask);
  
});

const createNewTask = event => {
  event.preventDefault();

  const newTaskDescription = document.getElementById('new-task-description');
  const newTask = document.createElement('li');
  newTask.innerText = newTaskDescription.value;
  
  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById('tasks').appendChild(task);
};


//grab text from text bar

//event listener for submit button //prevent redirect

//put text in todo list

