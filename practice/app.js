//reverse string in js without using a loop
function reverseString(str) {
    return str.split( '').reverse().join('');
}
console.log(reverseString('sam'));

// how do you remove duplicate from an array js without loop
const uniqueArr = [...new Set([1,2,3,3,4,5,5,2,1,6])];
console.log (uniqueArr);

//Loops: 
//1.for loop: when you know how many times to repeat 
for(let i=0;i<5;i++){
    console.log(i)
}
//2. While lopp: when you dont know how many times to loop beforehand note: runs as long as the condition true
let i=1;
while(i<= 3){
    console.log(i)
    i++;
}

//do while : runs at least once, even if the condition is false.
let j=4;
do{
    console.log(j);
    j++;
}while (j<=10);

//for of loop: Loop through iterables like arrays, strings
const person = { name: "john", age: 30 };

for (let key in person) {
    console.log(key + ":" + person[key]);
}

const fruits = ["apple","banana","mango"]
for (const fruit of fruits){
    console.log(fruit);
}

//prime number
function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(9));


