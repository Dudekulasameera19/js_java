// 1. Write a function that checks if a number is even or odd  
// 2. Use a loop to print numbers 1 to 10  
// 3. Create a function that adds two numbers and returns the result
let number = 6;
if(number %2==0){
    console.log("number is even");
}
else{
    console.log("numberis odd");
}

//print numbers 1 to 10 numbers
for(let i=1;i<=10;i++){
    console.log(i);
}

//odd numbers
for(let i=10;i<20;i++){
    i++;
    console.log(i);
}

//even numbers

for(let i=20;i<30;i++){
    console.log(i)
    i++;
}

console.log("********")
//arrays
let numbers4 = [1, 2, 3, 4, 5];

let result = numbers4
  .map(num => num * num)        
  .filter(num => num % 2 === 0) 
  .reduce((total, num) => total + num, 0); 

console.log(result);
