// Write a JavaScript program to compute sum of all the digits in a given integer number.
// Input Output
// 123 6
// 102 3
// 8 8




const prompt = require("prompt-sync")();
let digits = prompt("enter number here")
let sum = 0;
for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i])
}
console.log(sum);

//or



let user_input = +prompt('enter the number: ');
let sum = 0;
while (user_input > 9) {
    sum += user_input % 10;
    user_input = parseInt(user_input / 10);
}
sum += user_input;
console.log("the sum of digit is :" + sum);

