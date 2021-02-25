// Write a program that reads from the keyboard a student's name and number of completed
// credits and then outputs the student's name and label on following rules:
// a. "Freshman" if 0<credits<30
// b. "Sophomore" if 30<=credits<60
// c. "Junior" if 60<=credits<90
// d. "Senior" if credits>90
const prompt = require("prompt-sync")();
//const prompt = require("prompt-syn")();
let name = prompt ("enter your name");
let creadit = parseInt(prompt ("enter the creadit"));

if(creadit>0 && creadit<30){
    console.log(name+" is a freshman")
}
else if(creadit>=30 && creadit<60){
    console.log(name +"is a Sophomer")
} 
else if(creadit>=60 && creadit<90){
    console.log(name +"is a junior")
}
else{
    console.log(name+ "is a Senior")
}