let listTitle = document.getElementById('list-title');
console.log(listTitle);

listTitle.style.textAlign = 'center';

let listItem = document.querySelector('ul li');

listItem.style.color ='red'

// Accessing Multiple Elements

let grocery = document.getElementsByClassName('grocery-item');
console.log(grocery)
for (let item of grocery) {
  item.style.textDecoration = 'underline';
  item.style.color = 'blue';
  item.style.listStyleType = 'square';
}

let allListItems = document.querySelectorAll('ul li');
console.log(allListItems);

// Hooking Into DOM Events


const myButton = document.getElementById('clickMe');
const myInput = document.getElementById('listInput');

myButton.addEventListener('click', (event) => {
  console.log(event);
});

myInput.addEventListener('keyup', (event) => {
  // When a key is released, print out the value inside of the input box
  // Target is the element that fired the event
  // Value is the text inside of that target's element
  console.log(event.target.value);
});

// Walkthrough: Add items from the input box into the TODO list above

let userInput = '';

myInput.addEventListener('keyup', (event) => {
  userInput = event.target.value;
});


function createNewToDo (todoText) {
    //create new list item
    let newToDo = document.createElement('li');
    //add the text to the list item
    newToDo.innerText = todoText;
    //add the class 'list-item' to the new element
    newToDo.classList.add('list-item');
    //append that new element to the todo list
    document.querySelector('ul').appendChild(newToDo);
}

myButton.addEventListener('click', () => {
    createNewToDo(userInput);
})
