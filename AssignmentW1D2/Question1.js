"use strict";

/**
 * 
 */
const prompt = require("prompt-sync")();
let quarts = prompt("enter the value in quarts");

let volumeLitters = quarts * 0.946;
console.log("The volume in litters is "+ volumeLitters);
