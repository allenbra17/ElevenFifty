/*
    CONDITIONALS

    -if/else & ternaries

if (condition) {
    if true run this run this
}
    else {
        do this code
}

if (condition) {
    do this
} else if {
        do this
} else if {
    do this
} else {
    do this
}
*/

// if/else statement
let lightOn = true;

if (lightOn) {
    console.log('light is on');
}else {
    console.log('light is off');
}

//ternaries
lightOn ? console.log('light on') : console.log('light off');

//weather >50 = no jacket, <=70 and >55 jacket, else its cold son
let weather = 50;
if (weather > 70) {
    console.log('no jacket');
} else if (weather <= 70 && weather > 55) {
    console.log('jacket needed');
} else {
    console.log('its cold son');
}

weather > 70 ? console.log('no jacket') : weather > 55? console.log('jacket needed') : console.log('its cold son');

/* Challenge
GRADE CHALLENGE  
    
    given the variable score, write an if/else statement that console.log's a letter grade based on the variable of score. 
    
    If score is greater than or equal to 90, the letter grade should be A. 
    If score is greater than or equal to 80 and less than 90, the letter grade should be B. 
    If score is greater than or equal to 70 and less than 80, the letter grade should be C.
    If score is greater than or equal to 60 and less than 70, the letter grade should be D.
    if score less than 60, the letter grade should be F.
*/
 let score = 55;

 score >=90 ? console.log('A') :
 score >=80 ? console.log('B') :
 score >=70 ? console.log('C') :
 score >=60 ? console.log('D') :
 console.log('F');

 if (score >=90) {
     console.log('A');
 } else if (score >=80) {
     console.log('B');
 } else if (score >=70) {
     console.log('C');
 } else if (score >=60) {
     console.log('D');
 } else {
     console.log('F');
 }