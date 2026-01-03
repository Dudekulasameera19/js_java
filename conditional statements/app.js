//if statements
let number = 10;
if (number>5){
    console.log ('number is greater than 5')
}
//if-else
let age = 16;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//if-else if-else
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

//single line if
let score = 85;

if (score > 80) console.log("Excellent!");

//swicth case
let role = 'dept';

switch (role){
    case 'ece':
        console.log("ece dept");
        break;
    case 'cse':
        console.log("cse dept");
        break;
    case 'eee':
        console.log("eee dept");
        break;
    case 'dept':
        console.log("default dept");
        break;
    default:
        console.log("No dept found");
}

