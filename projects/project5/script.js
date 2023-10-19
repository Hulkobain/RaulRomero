let tasks = [];
let editedTaskIndex = null;

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
        taskItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <div class="btn-group" role="group">
                <button class="btn btn-success" onclick="toggleComplete(${index})">${task.completed ? 'Desmarcar' : 'Marcar'} como Completada</button>
                <button class="btn btn-primary" onclick="openEditModal(${index})">Editar</button>
                <button class="btn btn-danger" onclick="deleteTask(${index})">Eliminar</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function openEditModal(index) {
    editedTaskIndex = index;
    const editedTaskText = document.getElementById("edited-task-text");
    editedTaskText.value = tasks[index].text;
    const editTaskModal = new bootstrap.Modal(document.getElementById("editTaskModal"));
    editTaskModal.show();
}

function saveEditedTask() {
    const editedTaskText = document.getElementById("edited-task-text").value.trim();
    if (editedTaskText !== "") {
        tasks[editedTaskIndex].text = editedTaskText;
        editedTaskIndex = null;
        const editTaskModal = new bootstrap.Modal(document.getElementById("editTaskModal"));
        editTaskModal.hide();
        renderTasks();
    }
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

renderTasks();
