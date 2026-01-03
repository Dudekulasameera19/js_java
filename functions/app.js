//normal function

function greet(){
    console.log("hello this is sameera");
}
greet();

//function with parameter

function addition(a){
    console.log(a);
}
addition(19+26);

//function with default

function functioNname(name='guest'){
    console.log('hello'+name);
}
functioNname();
functioNname("sameera")
functioNname("divya")

//function with return type

function multiply(a,b){
    return a*b;
}
let result = multiply(4,5);
console.log(result);

//anonymous function
const showmessage =function(){
    console.log("this is anonymous")
}
showmessage();

//something

setTimeout (function(){
    console.log('this is something')
});

//arrow function

const hello = () => {
    console.log('hello sam')
}
hello();

//model2 IIFE -Immediately invoke function expression

(()=>{
    console.log("hello rgukt")
})();

//arrow function without variable

const add =(a,b)=>{
    console.log(a+b);
}
add(7,3);

//short arrow
let sub = (a,b )=> a-b;
console.log(sub(30,20))





