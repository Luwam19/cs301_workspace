"use strict";
/**
 * 
 * @param {number} num number to be tested if prime;
 * @return {boolean} ;
 */
function checkPrime(num){
    for(let i=2; i<num;i++){
        if(num%i===0) return false;
    }
    return true;
}

/**
 * 
 * @param {number} num1 number to be test if odd;
 * @return {boolean} ;
 */
function isOdd(num1){
    return num1%2!==0;
}

module.exports = {checkPrime, isOdd};