// let x;//undefine
// if(x) {// false
// let y=5
// };
// console.log(y); //we can not asses y

// let x;
// if(!x) {// true
//  let y=5
// };
// console.log(y);// we can not assses y


// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian
// calendar.
// Leap year definition: Every year that is exactly divisible by four is a leap year, except for years
// that are exactly divisible by 100, but these centurial years are leap years if they are exactly
// divisible by 400.
// E.g., leap years: 2016, 2000
// E.g., not leap years: 1700, 1800, 100

const prompt = require ("prompt-sync")();
let year  = prompt(parseInt("enter the year"));

if(year %100 ==0 && year % 400 ==0){
    console.log ("the year is leap year")
}
else{
    console.log ("not leap year")
}
