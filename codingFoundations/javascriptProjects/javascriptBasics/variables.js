// Javascript Variable Declaration
var ofIndependence;

// A variable is a NAMED box that holds something in JavaScript
console.log(ofIndependence); // Shows as undefined until initialized

// Initialize the variable
ofIndependence="1,2,3";

console.log(ofIndependence); // Shows as 1,2,3 now that its initialized

ofIndependence="4,5,6";
console.log(ofIndependence); //Shows as 4,5,6 now that its changed and shows all 3 sets of variables

//Declare and initialize
var food = "corn";
console.log(food)

//other types of variables
let favDay = "Halloween";
//let creates a variable that can be modified (mutable)
console.log(favDay)

const tax = .07
//const creates a variable that cannot be modified (immutable)
console.log(tax)

/*
Variables are created using the following keywords
-var
-let
-const

Variable names cannot start with numbers and cannot be keywords see link (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)
Variable names follow camelCasing in javaScript

*/