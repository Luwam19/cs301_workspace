// Write a defining table and JavaScript program to Display Fibonacci series up to N terms. N
// being positive integer from user input.
// The Fibonacci series is a sequence such that each number is the sum of the two preceding ones,
// starting from 0 and 1. That is, fib(0) = 0, fib(1) = 1, fib(n) = fib(n – 1) + fib(n – 2) for n > 1.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …


let n = prompt("enter number to compute fib:")
let i = 0;
let j = 1;
let count = 1;
let output = "";
output = output + i + "," + j + ",";
//console.log(1);
while (count < n) {
    let nextNumber = i + j;
    output = output + nextNumber + ",";
    i = j
    j = nextNumber;
    count++;
}
console.log(output);
//const prompt= require("prompt-sync")();
let num = +prompt("enter a number: ");
let result = "";
let num1 = 0;
let num2 = 1;
result = result + num1 + "," + num2 + ",";
for (let i = 0; i < num; i++) {
    let sum = num1 + num2;
    result += sum + ",";
    num1 = num2;
    num2 = sum;
}
console.log(result);