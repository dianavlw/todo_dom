const input = document.querySelector('input');
const list = document.querySelector('ul');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', () => {
  const task = input.value.trim();
  if (!task) return;

  // create a new li
  const li = document.createElement('li');
  li.innerHTML = `<span>${task}</span> <button class="delete">Delete</button>`;

  // add delete functionality
  li.querySelector('.delete').addEventListener('click', () => {
    li.remove();
  });

  list.appendChild(li);
  input.value = ''; // clear input
});


/*import { useState } from 'react';

let id = 0;

const INITIAL_TASKS = [
  { id: id++, label: 'Walk the dog' },
  { id: id++, label: 'Water the plants' },
  { id: id++, label: 'Wash the dishes' },
];

export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [newTask, setNewTask] = useState('');

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          aria-label="Add new task"
          type="text"
          placeholder="Add your task"
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
        />
        <div>
          <button
            onClick={() => {
              setTasks(
                tasks.concat({
                  id: id++,
                  label: newTask.trim(),
                }),
              );
              setNewTask('');
            }}>
            Submit
          </button>
        </div>
      </div>
      <ul>
        {tasks.map(({ id, label }) => (
          <li key={id}>
            <span>{label}</span>
            <button
              onClick={() => {
                setTasks(
                  tasks.filter((task) => task.id !== id),
                );
              }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
