
// Camel Notation: onTwoThreeFour
// Pascal Notation: OneTwoThreeFour


// Constructor Function : Pascal naming convention is preferred
// 'this' is a reference to an object which is executing this(current) peace of code
function Circle(radius) {
    this.radius = radius,
    this.draw = function () {
        console.log('drawing a circle object')
    }
}

// When we use new operator 3 things happen
// 1. The new operator creates empty javascript object like const x = {};
// 2. 'this' points to the empty object and set the properties and methods in the empty object
// 3. Returns the object from constructor function like 'return this;' and here we set 'circle' to point to the returned object
const circle = new Circle(1); 
console.log(circle);
circle.draw();


// Note: There's no difference between constructor function and factory function approach.
//        It's just that developers who're familiar with C# and Java languages are also familiar with constructor function
//        So, anything can be used. 