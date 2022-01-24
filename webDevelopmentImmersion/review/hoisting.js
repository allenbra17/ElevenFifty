/*
    HOISTING
    
    -hoisting was thought up as a general way of thinking about how our code is compiled and executed
        -there are two general phases that happen when we run our code:
            -creation phase: any c=variable (var, let, const) or function in our code are stored to memory
            -execution phase: values are assigned to the variables and functions that were stored away to memory during the creation phase

    -when our code is read and ran the file is read top to bottom, line by line - in  sequential order
    */

   let num = 5;

   console.log(num);

// FUNCTION DECLARATION

function sayHi() {
    console.log('Hi!');
    let a = 'hello';
    console.log(a);
}

sayHi();

// FUNCTION EXPRESSION
func();

let func = function() {
    console.log('will i run');
}