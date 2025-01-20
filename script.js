const taskForm = document.getElementById('task-form');
const tasksContainer = document.getElementById('tasks-container');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('task-title').value;
  const desc = document.getElementById('task-desc').value;

  const task = document.createElement('div');
  task.className = 'task';

  task.innerHTML = `
    <div>
      <h3>${title}</h3>
      <p>${desc}</p>
    </div>
    <div>
      <button class="complete">✔</button>
      <button class="delete">✖</button>
    </div>
  `;

  tasksContainer.appendChild(task);

  // Clear form fields
  taskForm.reset();

  // Add event listeners for buttons
  task.querySelector('.complete').addEventListener('click', () => {
    task.classList.toggle('completed');
  });

  task.querySelector('.delete').addEventListener('click', () => {
    task.remove();
  });
});
