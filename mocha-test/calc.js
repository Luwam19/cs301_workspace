"use strict";
/**
 * 
 * @param {number} op1; 
 * @param {number} op2;
 * @returns {number};
 */
function add(op1, op2) {
 let  added =(op1+ op2);
  return added;
}
/**
 * 
 * @param {number} op1 ;
 * @param {number} op2; 
 * @returns{number};
 */
function sub(op1, op2) {
    let  subt =(op1 -op2);
    return subt;
}
/**
 * 
 * @param {number} op1;
 * @param {number} op2;
 * @returns{number}; 
 */
function div(op1, op2) {
  let divde=(op1/op2);
  return divde;  
}

module.exports = {add, sub, div};