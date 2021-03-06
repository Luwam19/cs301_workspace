"use strict";
/**
 * 
 * @param {array} arr1 first array;
 * @param {array} arr2 second array;
 * @returns {boolean} true if equal else false;
 */
function isArrayEqual(arr1, arr2){
    if(arr1.length !== arr2.length ){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
       if( arr1[i]===arr2[i]){
          return true;
       }
    }
    return false;
}

/**
 * 
 * @param {array} arr;
 * @returns {number} result of addition of first and last elements of the array; 
 */
function addends(arr){
    let firstValue = arr[0];
    let lastValue= arr[arr.length-1];
    return (firstValue+lastValue);
}
/**
 * 
 * @param {array} array;
 * @return {number} ;
 */
function getMiddle(array){
   let mid=(array.length)/2;
    if(array.length%2===0){
    return (array[mid-1]+array[mid])/2;
    }else{
    return array[Math.ceil((array.length-1)/2)];
    }
}
/**
* @param {number} arr;
* @return {number};
*/
function rotateLeft(arr){
arr.push(arr.shift());
return arr;
} 

/**
* 
* @param {number} arr;
* @return {number};
*/
function rotateRight(arr){
arr.unshift(arr.pop());
return arr;
}
/**
* 
* @param {number} arr; 
* @param {number} numbMoves;
* @return {number};
*/
function rotateNRight(arr,numbMoves){
for(let i=0; i<arr.length;i++){
while(i<numbMoves){ 
arr.unshift(arr.pop());
break;
}

}
return arr;
}

/**
 * 
 * @param {array} arrayOne;
 * @param {array} arrayTwo;
 * @returns{array};
 */
function sortedTwoArrayIn2One(arrayOne,arrayTwo){
    let newLength=arrayOne.length+arrayTwo.length;
    let newArray=[];
    let isEmptyOne=arrayOne.length>=0;
    let isEmptyTwo=arrayOne.length>=0;
    for(let i=0;i<newLength;i++){
    if((isEmptyOne&&isEmptyTwo) &&((arrayOne[0]<=arrayTwo[0]))){
    newArray.push(arrayOne.shift());
    }else if(isEmptyTwo &&((arrayOne[0]>=arrayTwo[0]))) {
    newArray.push(arrayTwo.shift());
    }else{
    newArray.push(arrayTwo.shift()||arrayOne.shift());} 
    }
    return newArray;
   }
//    let arr=[1,2,4,5,8,30,40];
//    let ar2=[3,6,7,9,10,30];
//    console.log(sortedTwoArrayIn2One(arr,ar2));
/**
 * 
 * @param {array} arr;
 * @return{array};
 */
   function reverse2String(arr){
    let reversedArray=[];
   let  len=arr.length;
    for(let i=0;i<len;i++){
    reversedArray.push(arr.pop()); 
    }
    let result=reversedArray.join("_");
    return result;
   }
  // console.log(reverse2String(["chimdi","chala","Mesay","Luwam"]))
/**
 * 
 * @param {array} arr; 
 * @param {number} val;
 * @return{array}; 
 */
   function enhancedIncludes(arr, val){
    let result=[];
    let isExsit=true;
    let count=1;
    for(let i=0;i<arr.length;i++){
    if(arr[i]==val){
    result[0]=isExsit;
    result[count++]=i;
    }
    }
    return result;
   }
//    let array=[1, 2, 3, 4, 2]
//    console.log(enhancedIncludes(array,2));
   /**
    * 
    * @param {array} arr;
    * @returns{array}; 
    */
//    function reverseCopy(arr){
//     let copy=[];
//     let newArr=[];
//     copy=arr.slice();
//     let leng=copy.length;
//     for(let i=0;i<leng;i++){
//     newArr.push(copy.pop());
//     }
//     return newArr;
//    }
//    //console.log(reverseCopy([1,2,3,4,5,6]);

/**
 * 
 * @param {array} arr; 
 * @param {number} opd1; 
 * @param {number} opd2; 
 * @return {array};
 */
   function filterRange(arr,opd1,opd2){
    const newArr=[];
    let arrLngth=arr.length;
    let count=0;
    for(let i=0;i<arrLngth;i++){
    if(arr[i]>=opd1 && arr[i]<=opd2){
    newArr[count++]=arr[i];
    }
    
    }
    return newArr;
   }
   let arrr=[0, 100, 3, 6, -555];
   console.log(filterRange(arrr,6,120));
   /**
    * 
    * @param {array} arr;
    * @return {array}; 
    */
   function filterPalindromes(arr){
    const newArr=[];
    let ArLn=arr.length;
    let count=0;
    for(let i=0;i<ArLn;i++){
    for(let j=0;j<arr[i].length;j++){
    if(arr[i].charAt(j)===arr[i].charAt((arr[i].length-1)-j)){
    newArr[count]=arr[i]; 
    }
    
    }
    count++;
    }
    return newArr;
    }
    
    let arry=["a", "kayak", "racecar"];
    console.log(filterPalindromes(arry));
   /**
    * 
    * @param {number} matr1;
    * @param {number} matr2;
    * @return{number};
    */
   function matrixAddition(matr1,matr2){
 
    let newm=[];
    for(let i=0;i<matr1.length;i++){
    //let sum=0;
    for(let j=0;j<matr1[i].length;j++){
    //sum+=matr1[i][j]+matr2[i][j];
    newm.push(matr1[i][j]+matr2[i][j]);
    }
    console.log();
    }
    return newm;
    }
    
    let matr1=[[0,1,2],[9,8,7]];
    let matr2=[[6,5,4],[3,4,5]];
    console.table(matrixAddition(matr1,matr2));  
/**
 * 
 * @param {array} arr1;
 * @returns{array}; 
 */
function checkBalance(arr1){​​​​​​​​
let newArray=[];
if(arr1.length%2!==0)return false;
for(let i=0;i<arr1.length;i++){​​​​​​​​
if(arr1[i]==="{​​​​​​​​"||arr1[i]==="["||arr1[i]==="("){​​​​​​​​
newArray.push(arr1[i])
 }​​​​​​​​else if(newArray [newArray.length-1]==="{​​​​​​​​"&&arr1[i]==="}​​​​​​​​"){​​​​​​​​
newArray.pop()
 }​​​​​​​​else if(newArray [newArray.length-1]==="["&&arr1[i]==="]"){​​​​​​​​
newArray.pop()
 }​​​​​​​​else if(newArray [newArray.length-1]==="("&&arr1[i]===")"){​​​​​​​​
newArray.pop()
 }​​​​​​​​
 }​​​​​​​​
if(newArray.length===0){​​​​​​​​
return true;
 }​​​​​​​​
return false;
}​​​​​​​​

let exp = [")","(", ")", "[", "{​​​​​​​​", "}​​​​​​​​", "]"] 
console.log(checkBalance(exp))


module.exports= {isArrayEqual, addends,getMiddle,rotateLeft,rotateRight,rotateNRight,sortedTwoArrayIn2One,reverse2String,
    enhancedIncludes,filterRange,filterPalindromes,matrixAddition};