for(let i=0; i>10; i++){
    console.log(i);
}   function sum(n){
    if(n%2==0){
        return true;
    }
    
}
console.log(sum(4));

const prompt = require ("prompt-sync")(); 
let number = +prompt("enter the number ");
function reverseDigits(number){
        let sum=0;
        while(number>0){
        let last=number %10;
        sum =sum *10+last
        number=Math.floor(number/10) ;
        }
         return sum;
        
    }
   
console.log(reverseDigits(number))