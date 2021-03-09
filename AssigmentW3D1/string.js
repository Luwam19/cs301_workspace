 "use strict";
// /**
//  * 
//  * @param {object} obj;
//  * @return {number}; 
//  */
// function countproper(obj){
//     let count=0;
//     for(let key in obj){
//          if(obj.hasOwnProperty(key))
//         count++;
//     }
//     return count;
// }
// let bob = { name: "Bob", age: 10,idN: 123 };
//  console.log(countproper(bob));
// /**
//  * 
//  * @param {String} str;
//  * @return {Boolean};
//  */
// function checkSpam(str){
//     let lowestr= str.toLowerCase();
//     return lowestr.includes("lottory")|| lowestr.includes("prize");
// }
// console.log(checkSpam("the lottry is the prize"));
// console.log(checkSpam("you entrd woring information"));
// /**
//  * 
//  * @param {string} strg1 have string;
//  * @param {string} strg2 have string;
//  * @return{Boolean};
//  */
// function commonSuffix(strg1,strg2){
//     let index=0;
//     let jen=strg2.length-1;
//     for(let i=strg1.length-1;i>=0;i--){
//     if(strg1[i]===strg2[jen]){
//         jen--;
//     index++;
//     continue;
//     }
//     break;
//     }
//     let charStart=strg1.length-index;
//     let result=strg1.slice(charStart,strg1.length);
//     return result;
//    }
//    console.log(commonSuffix("teaching","learning"));
 /**
 * 
 * @param {string} str;
 * @return {string};
 */
 function tittleCase(str){
let firstChar=str.slice(0,1);
let afterFirstChar=str.slice(1);
console.log(afterFirstChar);
 let toUpperFirstChar=firstChar.toUpperCase();
 let result=toUpperFirstChar.concat( afterFirstChar);
 return result;
}
console.log(tittleCase("chimdi"));

// function titlecase(str){
//     let xxx= str.substring(0,1);
//     console.log(xxx);
//     let result= xxx.toUpperCase();
//     return result+str.substring(1);
// }
// console.log(titlecase("chimdi"));
//  /**
//   * 
//   * @param {number} aaa;
//   * @param {number} bbb;
//   * @return {number};
//   */
// function swap(aaa,bbb){
// let temp=aaa;//5
// aaa=bbb;
// bbb=temp;
// console.log(aaa,bbb);
// }
// console.log(swap(5,4));


/**
 * 
 * @param {array} users; 
 * @returns{number};
 */
function getAverageAge(users){
 
 let sum=0;
 for(let i=0;i<users.length;i++){
 sum+=users[i].age;
}
return sum/users.length;
}

let object1={name:"Abc",age:20};
let object2={name:"xyz",age:10};
let users=[];
users[0]=object1;
users[1]=object2;
 
console.log(getAverageAge(users));


// module.exports={ countproper,checkSpam,commonSuffix,tittleCase,swap,getAverageAge}