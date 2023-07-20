const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    return;
  }
  const taskItem = document.createElement('li');
  const taskTextElement = document.createElement('div');
  taskTextElement.classList.add('task-text');
  taskTextElement.textContent = taskText;
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.addEventListener('click', function() {
    taskItem.remove();
  });
  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
  taskInput.value = '';
}

taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
