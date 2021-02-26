// Write a program that calculates the total volume of a house, including the volume of the roof
// space. Your program must allow the user to enter width, depth, height and sweep as shown in
// figure below.
// Here are some helpful formulas:
// houseVolume = livingVolume + roofVolume
// livingVolume = width * height * depth
// roofVolume = triangleArea*width
// triangleArea = √s(s−a)(s−b)(s−c)
// s = (a+b+c)/2


const prompt =require("prompt-sync")();
let width = prompt("enter the width ");
let height = prompt("enter the height");
let depth = prompt("enter the depth ");
let sweep = prompt("enter the sweep here ")


function livingVolume(width,height,depth){
    let volume1 =width * height * depth;
    return volume1;
}

function triangleArea(sweep,sweep,width){
    let s=(sweep+sweep+width)/2
    let area=Math.sqrt(s*(s-sweep)*(s-sweep)*(s-width));
    return area;

}

function roofVolume(sweep,sweep,width,width){
   let  volume2 = triangleArea(sweep,sweep,width)*width;
    return volume2;
}
function houseVolume(width,height,depth,sweep){
    let result= livingVolume(width,height,depth)*roofVolume(sweep,sweep,width,width);
return result;
}
console.log(houseVolume(width,height,depth,sweep));