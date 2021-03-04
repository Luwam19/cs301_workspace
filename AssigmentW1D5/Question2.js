"use strict";


// Write a function that computes and returns area of a circle based on the value of input radius.
// a. Write a function that compute volume of a cylinder and making use of function that
// computes area of a circle.
// area of a circle
/**
 * 
 * @param {number} radius ;
 * @returns{number} area;
 */
function areaOfCircle(radius){
    let area = Math.PI* radius*radius;
    return area;
}

//volume of cylinder

/**
 * 
 * @param {number} height ;
 * @returns{number} area;
 */
function volumeOfCylinder(height ){
    let volume = areaOfCircle(radius)*height;
    return volume; 
}
const prompt = require ("prompt-sync")();
let radius= +prompt ("enter a number for radius");
let height= + prompt("enter a nmber for height of the cylinder");

let result =(areaOfCircle(radius));
console.log("The area of the circle is "+ result);
let resultOfVolume =(volumeOfCylinder(height));
console.log("The volume of the cylinder is "+ resultOfVolume);