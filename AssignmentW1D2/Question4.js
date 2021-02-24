const prompt = require("prompt-sync")();
let start=parseInt(prompt("enter the starting odometer"));
let end=parseInt(prompt("enter the end odometer holds"));
let gallon=parseInt(prompt("number of gallon"));

let milePerGallon=(end-start)/gallon;
console.log(milePerGallon);
