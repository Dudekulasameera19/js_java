// Operators : 
// Operators are special symbols that perform operations on operands (values and variables).
// They can be categorized into several types including arithmetic, assignment, comparison, logical, and more.


// Arithmetic Operators : (+, -, *, /, %, **)

const num1 = 500;
const num2 = 200;
const num3 = 400;
const num4 = 1900;


console.log(`
        num1 + num2 +num3 + num4 = ${num1 + num2 +num3 + num4}     
        num1 + num2 +num3 - num4 = ${num1 + num2 +num3 - num4} 
        num1 + num2 *num3 - num4 = ${num1 + num2 *num3 - num4} 
        num1 / num2 +num3 - num4 = ${num1 / num2 +num3 - num4} 
        num1 + num2 ** num3 % num4 = ${num1 + num2 ** num3 % num4} 
    `);

// Assignment Operators : (=, +=, -=, *=, /=, %=, **=)

let num3 = 50;

console.log(num3+=50); // 100
console.log(num3-=50); // 50
console.log(num3*=5); // 250
console.log(num3/=10); // 25
console.log(num3%=2); // 1

// Comparison Operators : (==, ===, !=, !==, >, <, >=, <=)


const num4 = 500;
const num5 = "500";

console.log(num4 == num5);
console.log(num4 === num5);
console.log(num4 != num5);
console.log(num4 !== num5);
console.log(num4 > num5);
console.log(num4 < num5);
console.log(num4 >= num5);
console.log(num4 <= num5);

// Logical Operators : (&&, ||, !)

const num6 = true;
const num7 = false; 

//  A    B   A*B     A+B     !A      !B
//  0    0   0      0       1       1        
//  0    1   0      1       1       0
//  1    0   0      1       0       1
//  1    1   1      1       0       0  

console.log(num6 || num7 && (num1+num2)>= num4);

// Increment & Decrement :

let num8 = 1000;

let num9 =  ++num8;

console.log(`num8 : ${num8} | num9 : ${num9}`);
console.log('hello iam 😍') //to get emoji windows ; press 
