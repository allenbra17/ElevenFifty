// Create a function called greet
// This function should accept 2 parameters (greeting, name)
// The function should return a string with a greeting. For example if you give the function the arguments "Good morning" and "Paul" it will return the string "Good Morning Paul"
// Console.log and call the function.

function greet(greeting, name) {
    return `${greeting} ${name}`
};

console.log(greet('hi', 'paul'));


// // Create some code that counts from 0 to 100. 
// // Create some code that tests if the number is divisible by 3, 5, or 3 & 5.
// // If it is divisible by 3 print "Fizz"
// // If it is divisible by 5 print "Buzz"
// // If it is divisible by 3 & 5 print "FizzBuzz"
// // If the number is not divisible by any of these, print the number itself.

for (let i = 0; i<=100; i++) {

    if(i % 5 == 0 && i % 3 == 0)
        console.log('fizzbuzz')
        else if (i % 3 == 0)
        console.log("fizz")
        else if (i % 5 == 0)
        console.log("buzz")
        else
        console.log(i)
}
