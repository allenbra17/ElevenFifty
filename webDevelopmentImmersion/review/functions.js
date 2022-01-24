/*
    FUNCTIONS

    - javascript functions are defined with the function keyword, and can be written as a function declaration or a function expression
        -function declarations are hoisted in our code and only run when we call them
        -function expressions are not hoisted in our code, and are generally stored in variables

    -functions without names are known as anonymous functions
    */

// FUNCTION DECLARATION

function sayHello() {
    console.log('hi');
}

sayHello();

// FUNCTION EXPRESSION

let greetings = function() { // anonymous function
    console.log('hello');
}
greetings();

/*
    PARAMETERS

    -newly declared variable that we have not given a value to - placeholder
        -the value we pass into the function when we call the function to run (argument) gets assigned to the parameter
    - general naming convention for parameteres: parameters should be related to the argument

*/
function myDog(puppies) {
    console.log(`My dogs' name is ${puppies}.`);
}

myDog('Patch')
myDog('Lucky')

function randomNumber (number) {
    console.log(number);
}

randomNumber(17);

function foods(bfast, lunch, dinner) {
    console.log(`I ate ${bfast}, ${lunch}, and ${dinner} today.`);
}
foods('eggs', 'sandwich', 'pizza') // order of arguments matter

/* 
    RETURN
    -functions can also manipulate the data sent in to them and return a new value
*/

function calculator(one, two, three) {
    let total = one + two + three;
    let average = Math.round(total / 3)

    return average;
}
let totalAverage = calculator(40,60,55)
console.log(totalAverage);

/* 
    ARROW FUNCTIONS

    -arrow functions were introduced in E56(2017). They are a more concise way to write function expressions, not declarations
        -arrow functions do not get hoisted since they are technically function expresssions
    -there are two types of arrow functions - concise body and block body
        -concise body arrow functions do not open up a function body, and they are written on a single line. Concise body arrow functions are best used for single operations. The return is implicit with concise body arrow functions
        -block body arrow functions DO open up a function body. The return does not happen automatically with block body arrow functions, we have to manually type the return keyword out
        */

        // CONCISE BODY ARROW FUNCTIONS

        let speak = name => console.log(`${name} goes woof`); // when there is a only a single parameter the () can be omitted

        speak('patch');

        // CONCISE BODY ARROW FUNCTION W/ RETURN

        let nameJoiner = (first, last) => `${first} ${last}`;
        let fullName = nameJoiner('Brad', 'Allen');
        console.log(fullName);

        //BLOCK BODY ARROW FUNCTION
        let talk = name => {
            console.log(`${name}says bark`);
        }

        //BLOCK BODY ARROW FUNCTION W/RETURN
        let joinerName = (first, last) => {
            return `${first} ${last}`;
        }

        let completeName = joinerName('spongebob', 'squarepants');
        console.log(completeName);