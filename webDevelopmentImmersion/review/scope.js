/*
    SCOPE

    - scope is the hierarchy of variables in our code - also commonly referred to as global or local scope
        - local scopes have access to global scope, but not vice versa
*/

let coffeeType = 'dark roast'; // globally scoped variable

function exampleFunction() { // locally scoped body
    let x = 'fuction body'
    console.log(x);
    console.log(coffeeType);
}

exampleFunction(); // Both variables

console.log(x); // undefined