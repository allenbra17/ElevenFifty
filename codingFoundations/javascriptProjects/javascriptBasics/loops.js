//Loops

//Loops offer us a quick and easy way to do something repeatedly.
//Examples: eating a bite of food until we are full, playing songs of an album until finished.

//For Loops
//The basic of doing an action on repeat

//Syntax
//for(starting point; ending condtition/condition check; iteration/incrementor){repeated action} 

//Challenge: using a for loop,starting from 0 count to 20 by 1's)
for(let i = 0; i <=20; i++)
    console.log(i);
 
    //Challenge: usingg a for loop, count from 10 to 0 going down by 1's.
for (let i =10; i >= 0; i--)
    console.log(i);

//Challenge: using a for loop, count from 0 to 24, by 2's
for(let i = 0; i <=24; i +=2)
    console.log(i);

// Infinite Loop
// for(let i =100; i > 0; i++)
//     console.log(i);

//Challenge: using a for loop count from 0 to -24, by 2's
for(let i = 0; i >=- 24; i-=2)
    console.log(i);

//For In Loop
//For in loops are great for iterating over values in an object. (enumerate)

//Syntax
//For (element in object/variable){action()}

    let student = {
        name: 'Taylor',
        awesome: true,
        codingWeek: 'JavaScript',
        week: 2
    }

    for (key in student) {
        console.log(key);
        console.log(student[key]);
    }

    let catArray = ['tabby','black', 'white', 'burmese'];
    let catArray = {
        0: 'tabby',
        1: 'black',
        2: 'white',
        3: 'burmese'
    }
        for(cat in catArray) {
            console.log(cat);
        }

//For Of Loops
//For of loops create a loop iterating over "iterable" objects. Meaning, numerically overThe order matters.

//Syntax
//for(item of variable) {action()}

    let student = {
        name: 'Taylor',
        awesome: true,
        codingWeek: 'JavaScript',
        week: 2
    }

    for (key of student) {
        console.log(key);
        console.log(student[key]);
    }

    let catArray = ['tabby','black', 'white', 'burmese'];
    let catArray = {
        0: 'tabby',
        1: 'black',
        2: 'white',
        3: 'burmese'
    }
        for(cat of catArray) {
            console.log(cat);
        }