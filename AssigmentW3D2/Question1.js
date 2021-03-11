"use strict";
/**
 * 
 * @param {number} num;
 * @return {number}; 
 */
   function countDigits(num){
    if(num === 0){// num=Math.abs(num) if(num<9) return 1;
    return 0;
    }else{
    return 1 + countDigits(parseInt(num/10));
    }
   }
   console.log(countDigits(23456));

   
   /**
    * 
    * @param {string} str;
    * @return {string}; 
    */
   function reverse(str){
    if(str === ""){
    return "";
    }else{
    let result= str.substring(str.length-1);
    return result + reverse(str.substring(0,str.length-1));
    // return str[str.length-1]+ reverse(str.substring(0,str.length-1));
    }
   }
   console.log(reverse("luwam"));
   /**
 * 
 * @param {number} base; 
 * @param {number} powerRased;
 * @return {number}; 
 */
function power(base,powerRased){
    if(powerRased==0)
        return 1;
    else
        return (base * power(base,powerRased-1));
    
}

console.log(power(2,5));
    
   module.exports={power,countDigits,reverse};