//Arrays
//Denoted by square brackets, that hold lists of items
//Separated with commas holding multiple datatypes

let holidays = ["South Africa", "Brugge", "Poland"];
let fibonacci = [ 1, 1, 2, 3, 5, 8, 13, 21, 34];
let johnSmith = [45, "New York", 3, true];

//Accessed by the following
console.log(johnSmith[0]); //45
console.log(johnSmith[0], johnSmith[2]); //45 3

//Accessing a array inside of an array
let foods = ['carrot', 'celery', ['kiwi', 'orange', 'apple']];
console.log(foods[2][2]);//apple

//.length Shows count of items in specific array
console.log(foods.length);

//.shift removes the first item from an array and returns the array
let favFoods = ['shrimp', 'pizza', 'cookies', 'pasta']
favFoods.shift()
console.log(favFoods);

//.indexof return index of an item
console.log(favFoods.indexOf('pizza'));

//.unshift adds to the begininng of the array
favFoods.unshift('burger');
console.log(favFoods);

//.pop removes the last item in an array
favFoods.pop();
console.log(favFoods);

//.push adds item to end of an array
favFoods.push('avacado')
console.log(favFoods);

//.splice remove an item and replace (position, how many to remove, what to add)
favFoods.splice(2, 1, 'candy')
console.log(favFoods);

//redeclare as empty
let favFoods = []