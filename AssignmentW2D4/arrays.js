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
 * @param {array} arr;
 * @return {number} ;
 */
function getMiddle(arr){
    let mid;
    mid=(array.length)/2;
    if(array.length%2===0){
    return (array[mid-1]+array[mid])/2;
    }else{
    return array[Math.ceil((array.length-1)/2)
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
module.exports= {isArrayEqual, addends,getMiddle,rotateLeft,rotateRight,rotateNRight}