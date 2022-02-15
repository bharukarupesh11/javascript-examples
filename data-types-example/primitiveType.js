//Primitive Variables in Javascript
let name = 'Rupesh'; //String Literal
let age = 28; //Number Literal
let isFit = true; //Boolean Literal
let skinColor = undefined; //Undefined Type Literal. Note: undefined is a value of type Undefined
let foodChoice = null; //null is a value of type Object

console.log(name);

//typeof keyword to check the type of each variable
console.log(typeof name);
console.log(typeof age);
console.log(typeof isFit);
console.log(typeof skinColor);
console.log(typeof foodChoice);

//Unlike 'C' or 'C++', Javascript is a dynamically typed language
//Example:
name = 25; //The type of variable name will be inferred at run time 
console.log("Name:", name);