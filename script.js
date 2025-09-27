document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const nameInput = document.getElementById('taskName');
    const dateInput = document.getElementById('taskDate');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const taskName = nameInput.value.trim();
        const taskDate = dateInput.value;

        if (taskName && taskDate) {
            addTask(taskName, taskDate);
            nameInput.value = '';
            dateInput.value = '';
        }
    });

    function addTask(name, date) {
        const li = document.createElement('li');
        li.className = 'task';

        const infoDiv = document.createElement('div');
        infoDiv.className = 'task-info';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'task-name';
        nameSpan.textContent = name;

        const dateSpan = document.createElement('div');
        dateSpan.className = 'task-date';
        dateSpan.textContent = `Fecha: ${date}`;

        infoDiv.appendChild(nameSpan);
        infoDiv.appendChild(dateSpan);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Completada';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
            completeBtn.textContent = li.classList.contains('completed') ? 'Pendiente' : 'Completada';
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.style.backgroundColor = '#dc3545';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        const buttonGroup = document.createElement('div');
        buttonGroup.style.display = 'flex';
        buttonGroup.style.gap = '10px';

        buttonGroup.appendChild(completeBtn);
        buttonGroup.appendChild(deleteBtn);

        li.appendChild(infoDiv);
        li.appendChild(buttonGroup);

        taskList.appendChild(li);
    }
});
