/*
    ARRAYS
    -arrays are used to store multiple values in a single variable
        -there are array methods that allow us to traverse as well as mutate, the data held in the array
*/

let arr = ['first', 'second', 'third'];
console.log(arr[0]);
console.log(arr[1]);

// Array Constructor - used to create an array

let test = new Array();
console.log(test);

let testTwo = new Array(3);
console.log(testTwo.length); //length is 3

testTwo[0]=2 // identify one of the value in the array by position

/*
Important note- if you use the array constructor to create an array and pass in a singular number you are creatng an array of that length. If you pass in multiple arguments you create an array with those specific values
*/

let nums = new Array(1,2,3,4,5);
console.log(nums);

let strings = new Array('bob','sue','bill','fred');
console.log(strings);

/*
    FOR EACH
    -foreach() method is essentially another way to loop through an array
    -runs a function for each element in an array
*/
//Regular for loop
let boardGames = ['monopoly','clue','risk','candy land','catan'];

// variable         condition       incrementor
for (let i = 0; i < boardGames.length; i++) {
    console.log(boardGames[i])
}

//for each method
//TRADITIONAL ANONYMOUS FUNCTION

boardGames.forEach(function (game) {
    console.log(game);
})

//BLOCK BODY ANONYMOUS ARROW FUNCTION
boardGames.forEach(game =>{
    console.log(game);
})

//CONCISE BODY ANONYMOUS ARROW FUNCTION
boardGames.forEach(game => console.log(game));

let shoppingList = ['chicken','beef','soup','veggies','milk'];
//access a specific element
console.log(shoppingList[3]);
//array.length number of elements in an array
console.log(shoppingList.length);
//array.push adds an element to the end of the array
shoppingList.push('salt');
console.log(shoppingList);
//array.pop removes the last element and returns it
shoppingList.pop();
console.log(shoppingList);
//array.unshift adds element to the begining of an array
shoppingList.unshift('salt');
console.log(shoppingList);
//array.shift removes element from the beginning
shoppingList.shift();
console.log(shoppingList);
//array.map transforms the elements in the original array by calling the given functiononce for each element in the array
