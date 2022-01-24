console.log('hello world');

let x=10;
console.log(x);

// let testTwo = document.querySelector('#testTwo')
// console.log(testTwo);

let testParagraph = document.getElementById('testParagraph')
console.log(testParagraph);
testParagraph.style.color = 'blue'

let pTags = document.querySelectorAll('p.sampleClass');
console.log(pTags);

pTags.forEach(pTag => pTag.innerText = 'change using forEach()');
pTags[2].innerText = 'my text has changed by index';

// EVENT LISTENERS

let button = document.getElementById('clickThisButton');

button.addEventListener('click', event => {
    if (event.target.style.backgroundColor === 'red') {
        event.target.style = 'background-color:blue'
    }
    else {event.target.style = 'background-color: red;'}
})


// button.addEventListener('click',function(event) {
//     if (event.target.style.backgroundColor === 'red') {
//         event.target.style = 'background-color: blue;'
//     }
//     else { event.target.style = 'background-color:red;'}
// })
// console.log(button);

// button.addEventListener('click', event => event.target.style = 'background-color : red;')

// button.addEventListener('click', event => {
//     event.target.style = 'background-color: blue'
// })

let inputField = document.querySelector('#nameInput');
console.log(inputField)

inputField.addEventListener('keyup', e => {
    console.log(e.target.value);

    document.getElementsByTagName('p')[0].innerText = 'SOMETHING HAS CHANGED!!!';

if (e.target.value === '') {
    document.getElementsByTagName('p')[1].innerText = "nothing has been typed";
}   
else {
    document.getElementsByTagName('p')[1].innerText = `say hello to ${e.target.value}`;
}})
