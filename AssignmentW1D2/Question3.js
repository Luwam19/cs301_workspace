const prompt = require("prompt-sync")();
let box= parseInt(prompt("total box"));
let stack=parseInt(prompt("the stack that holds"));

let numBox = Math.ceil(box/stack);
console.log(numBox);
