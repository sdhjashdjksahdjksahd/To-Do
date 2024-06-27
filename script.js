document.getElementById('add-task-btn').addEventListener('click', function() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText) {
      addTask(taskText);
      taskInput.value = '';
  }
});

function addTask(taskText) {
  const taskList = document.getElementById('task-list');

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', function() {
      taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
