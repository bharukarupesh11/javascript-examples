
// Constructor Function 
/* function Circle(radius) {
    // instance members
    this.radius = radius;
    this.draw = function (){
        console.log('drawing');
    }
} */

// Prototypical member
/* Circle.prototype.move = function (){
    console.log('moving');
} */


// Above example replaced with ES6 Classes
// 1. Class Declaration Syntax
class Circle {
    constructor (radius) {
        // instance members
        this.radius = radius;
        this.draw = function () {
            console.log('drawing');
        }
    }

    // prototypical member
    moveBy() {
            console.log('moving');
    }
}

// classes forces us to use new operator for creating an objects ; otherwise gives an error
const c = new Circle(12);


// 2. Class Expression Syntax
const Square = class {
    // Not much useful
};


// Note: The only reason we saw both the syntax above is because unlike functions 
//       classes are not hoisted in javascript. To understand it better, read hoisting for functions.