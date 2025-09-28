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
