"use strict";
// Write a function named checkPrime that accepts a parameter and returns true if the argument
// is a prime number otherwise returns false.
// a. Now write a program that prompts user to input a number and calls the function
// checkPrime to see if the entered number is a prime number or not

const prompt = require ("prompt-sync")();
let numb = +prompt("enter a number ");
/**
 * @param {number} num to be checked;
 * @returns {boolean} weather its true or false;
 */
function checkPrime(num){
    let isprime;
for (let i = 2; i < num; i++) {
    if (num % i != 0) {
      isprime= true;
      break;
    }
    else {
        isprime= false;
        break;
    }
  }
  return isprime;
}
console.log(checkPrime(numb));


