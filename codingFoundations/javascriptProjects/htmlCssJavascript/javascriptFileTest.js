console.log("Hello World");

let billAmount = 132.96;
let inTax = billAmount * .07;
let guests = 4
let total = inTax + billAmount;
let perPerson = total / guests;

console.log(perPerson);
console.log(perPerson.toFixed(2));

let rounded = perPerson.toFixed(2);

document.getElementById("results").innerText =rounded;

let pTage = document.getElementById("results");

pTage.addEventListener('click', () => console.log('I have been pressed!'));