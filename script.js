document.addEventListener('DOMContentLoaded', function () {
  // all your code goes here

  const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  // create li
  const li = document.createElement('li');
  li.textContent = taskText;
  li.classList.add('task-item'); // or whatever class name fits your CSS


  // create remove button
  const removeBtn = document.createElement('button');
removeBtn.textContent = 'Remove';
removeBtn.classList.add('remove-btn'); // <— this is probably required


  // when clicked, remove the li
  removeBtn.onclick = function () {
    taskList.removeChild(li);
  };

  // attach button to li, li to ul
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // clear input
  taskInput.value = '';
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

});
