"use strict";
// Write a function to find LCM of any two numbers using the HCF function from previous
// question. Write it as a function expression.
// a. Now write a program that asks two numbers from the user and displays HCF and LCM of
// the two numbers.
// Hint: search for relation between HCF and LCM.

const prompt= require("prompt-sync")();
let num1 = prompt("enter a number");
let num2 = prompt("enter a number ");
/**
 * 
 * @param {number} num1;
 * @param {number} num2;
 * @return {number};
 */
function hcf (num1,num2){
    let min= Math.min(num1,num2);
let common=0;
for( let i=1;i<=min ;i++){
    if(num2%i==0 && num1%i==0){
       common=i;
    }
}
return common;
}
console.log(hcf(num1,num2));
/**
 * 
 * @param {number} num;
 * @param {number} numb;
 * @return {number};
 */
function lcm(num,numb){
    let product = num*numb;
    let hcfresult =hcf(num,numb);
    let result=product/hcfresult;

    return result;
}

console.log(lcm(20,12));