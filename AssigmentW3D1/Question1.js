//1. Write the code, one line for each action:
// a. Create an empty object car
// b. Add the property name make with value Toyota
// c. Add the property name model with value Camry
// d. Print the object
// e. Without modifying the code structure of the object, change the value of the model to
// RAV4.
// f. Print the object
// g. Without modifying the code structure of the object, Remove property make from the
// object
// h. Print the object

// let car ={make :"Toyota",model : "camry"}

// console.log(car);
// car.make="RAV4";
// console.log(car);
// delete car.make;
// console.log(car);

let car={};
car.make="Toyota";
car.model="camry";
console.log(car);
car.model="Rava4";
console.log(car);
delete car.make;
console.log(car);
