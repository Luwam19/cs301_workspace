// let x = null;
// let y;
// console.log(typeof (x));
// console.log(typeof (y));// undefine
// console.log(x++);
// y++;
// console.log(x, y);
// y = false;
// console.log(x < y);
// x += "2";
// console.log(x);
// console.log(x > y);

const prompt = require("prompt-sync")();
// let user = prompt ("enter the weather today");

// if(user=="rainy"){
//     console.log("use amberla")
// }

// let age = parseInt(prompt("enter the age"));
// if(age <=0){
//     console.log ("plz enter availid age")
// }
// else if(age >0 && age <=14){
//     console.log ("you cant drive")
// }
// else if(age >15 && age <= 18){
//     console.log ("you can drive under supervision")
// }
// else {
//     console.log ('you can drive')
// }

// let age = parseInt(prompt("enter the age"));
// if(age <=0){
//     console.log ("plz enter availid age")
// }
// else if(age <=14){
//     console.log ("you cant drive")
// }
//  else if( age <= 18){
//     console.log ("you can drive under supervision")
// }
// else(age>=19){
//     console.log ('you can drive')
// }


// let num = parseInt(prompt("enter a number from 1-5 "));
// let spelling;

// switch (num) {
//     case 1:
//         spelling = "one ";
//         break;
//     case 2:
//         spelling = "two ";
//         break;
//     case 3:
//         spelling = "three ";
//         break;
//     case 4:
//         spelling = "four ";
//         break;
//     case 5:
//         spelling = "five";
//         break;
// }

// console.log("the spelling for the number is " + spelling);

let weather = prompt("Please enter weather outside");
let temp = prompt("Please enter current temperature");
if (weather == 'sunny') {
    if (temp < 80) {
        console.log("Good day for outdoor running")
    } else {
        console.log("Better use trade mill at home.")
    }
}