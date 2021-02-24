const prompt = require("prompt-sync")();
let kilometer = prompt("enter the distance in kilometer");

let distance_in_mile = kilometer * 0.621;
console.log("The distance in mile is "+ distance_in_mile);