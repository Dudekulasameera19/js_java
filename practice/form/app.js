function regex(){

console.log("%%%%%%%%%%%");
let userName = document.getElementById("userName").value;
let userNameRegex = /^[A-Z]+[a-z\d_]{4,15}$/;
console.log(userNameRegex.test(userName));

console.log("*************");
let mobile = document.getElementById("mobileNumber").value;
let mobileNumberRegex = /^[6-9]\d{9}/;
console.log(mobileNumberRegex.test(mobile));

console.log("$$$$$$$$$$$");
let email = document.getElementById("email").value;
let emailRegex = /^[A-Za-z0-9._%+-]+@[a-zA-z0-9]+\.[a-zA-z]{2,}$/
console.log(emailRegex.test(email));

console.log("@@@@@@@@@@@@@@");

let pan = document.getElementById("panCard").value.toUpperCase();
let pancardRegex = /^[A-Z]{5}\d{4}[A-Z]$/
console.log(pancardRegex.test(pan));

console.log("&&&&&&&&&&&&&&&&&&&");

let password = document.getElementById("password").value;
let PasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@_.%*&#!$^]).{8,}$/;
console.log(PasswordRegex.test(password))

}