// Write a function named checkPrime that accepts a parameter and returns true if the argument
// is a prime number otherwise returns false.
// a. Now write a program that prompts user to input a number and calls the function
// checkPrime to see if the entered number is a prime number or not


const prompt = require ("prompt-sync")();
let n= +prompt("enter a number ")
function checkPrime(n){
    let isprime;
for (let i = 2; i < n; i++) {
    if (n % i != 0) {
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
console.log(checkPrime(n));


