"use strict";
//`4. Write a function to compute HCF of two numbers. Write it as a function expression`
////////function declearation
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

console.log(hcf(6,12));


 

