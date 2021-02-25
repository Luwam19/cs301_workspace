const prompt = require("prompt-sync")();
let weather = prompt("enter the weather today");

if(weather=="hot"){
    console.log("wear sandals")
}
else if(weather=="rain"){
    console.log("wear galoshes")
}
else if(weather=="snow"){
    console.log("wear boots") 
} 
else{
    console.log("wear sneakers")
}