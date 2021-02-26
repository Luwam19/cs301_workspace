// Write a Java program to calculate the factorial value of a given number. E.g., factorial 4 =
// 4*3*2*1 = 24



const prompt = require("prompt-sync")();

let number = +prompt("entr the number");

let product = 1;

for (let i = number; i > 0; i--) {
    product *= i;
}
console.log(product);


