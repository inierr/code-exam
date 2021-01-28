// 1. How to loop through child eements of parent dom
`
  <div id="some-element">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
  </div>
`
const childElements = document.querySelector('#some-element').children;
childElements.forEach(element => {
  // code here
});

// 2. How do you attach event in an element or dom
`
  <button id="add">Add</button>
`
const addButton = document.querySelector('#add');
addButton.addEventListener('click', (event) => {
  // code here
});


/*
  3. If you have a <ul> ilst, and add button & remove button.
  Code the add button to add a list item at the end.
  Code the remove  button to remove the list item at the end.
*/
`
  <button id="add">Add Last</button>
  <button id="remove">Remove First</button>
  <ul id="list">
  </ul>
`
let counter = 1;
const addButton = document.querySelector('#add');
const removeButton = document.querySelector('#remove');

addButton.addEventListener('click', () => {
  const list = document.querySelector('#list');
  const li = document.createElement('li');
  li.innerText = counter;
  list.appendChild(li);
  counter += 1;
});


removeButton.addEventListener('click', () => {
  const list = document.querySelector('#list');
  list.firstChild.remove();
});


