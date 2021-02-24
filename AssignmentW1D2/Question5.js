const prompt = require("prompt-sync")();
let age = parseInt(prompt("enter your age"));
 let max =(220-age);
 let slowest=0.65*max;
 let fastest=0.85*max;

 console.log("The fastest rate is "+ fastest);
 console.log("The slowest rate is "+ slowest);