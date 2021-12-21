//DataTypes

//Booleans - booleans have only two posssible values (true,false)
let on = true;
let off = false;
console.log(on,off);

//Null - null is an empty value, nothing in it, space to fill
let empty = null;
console.log(empty);
 
//Undefined - No value assigned, does not act as an empty container
let undef = undefined;
console.log(undef);
//Write like this instead
let correct;
console.log(correct);

//Numbers - Just numbers, no need for anything special to write them
let degrees = 20;
console.log(degrees);
let precise = 999999999999999; //15
console.log(precise);
let rounded = 9999999999999999; //16
console.log(rounded);
let notQuite = .2 + .1;
console.log(notQuite);
let a = Number("33") //Number constructor
console.log(a);
console.log(a + notQuite);

//Strings - Datatype that represents text needs wrapped in "" or ''
// A primitive datatype
let stringOne = "Double quotes!"
let stringTwo = 'Single quotes.'
console.log(stringOne, stringTwo);

//Numbers vs strings
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first,second);

//Type of command shows datatype of variable
console.log(typeof first);
console.log(typeof second);

//Objects - A datatype used to store many values
//Object is made up of properties of key and value pairs
let frodo = {
    race: 'Hobbit',
    rings: 1,
    cloak: true
}
console.log(frodo);
console.log(typeof frodo);

//Arrays - Arrays are containers that hold lists of items.
//Arrays use square brackets, each item, regardless of datatype, is separated by commas.
let list = [
    'item1',
    'item2',
    'item3'
]
console.log(list);
let burrito = [
    'From Chipotle',
    9.99,
    true
]
console.log(burrito);
console.log(typeof burrito);

//Datatype Literals - A literal represents a fixed value that devs insert into code

//String Literal - Value characters wrapped in quotes
let car = 'honda';

//Numeric Literal - Intergers
let dec = 12

//Boolean Literal - true/false
let tired = true

//Object Literal - Key and value pairs
let kate = {
    hobby1: 'painting',
    hobby2: 'music',
    pets: 3
}

//Objects use dot notation to dive into its contents. Use the key to grab the value.
console.log(kate.pets);

//Array Literal - Lists
let weekend = [
    'fri',
    'sat',
    'sun'
]
console.log(weekend[1], weekend.length);
