
const prompt = require ("prompt-sync")();
let borrower= prompt("enter from which group");
let Numberbook= parseInt(prompt("enter number of book"));

if(borrower=="student"){
    if(Numberbook === 0){
        console.log("loan duration in 6 weeks");
    }
    else if(Numberbook<3){
        console.log("loan duration in 4 weeks");
    }
    else{
        console.log("loan duration in 2 weeks");
    }
}else if(borrower=="faculty"){
    if(Numberbook === 0){
        console.log("loan duration in 12 weeks");
    }
    else if(Numberbook< 3){
        console.log("loan duration in 10  weeks");
    }
    else{
        console.log("loan duration in 8 weeks");
    }
}
else {
    if(Numberbook === 0){
        console.log("loan duration in 4 weeks");
    }
    else if(Numberbook<3){
        console.log("loan duration in 3  weeks");
    }
    else{
        console.log("loan duration in 2 weeks");
    }}