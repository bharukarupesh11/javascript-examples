// Below is an example of Creating our own prototypical inheritance

// Structure of Circle:
// circle Object ----inherits from----> Circle Base ----inherits from----> Shape Base ----inherits from----> Object Base

// Structure of Square:
// square Object ----inherits from----> Square Base ----inherits from----> Shape Base ----inherits from----> Object Base

// Constructor Function for creating Shape object
function Shape() {
    
}

// Adding draw() method to shapebase prototype
Shape.prototype.draw = function () {
    console.log('drawing');
}

// Constructor Function for creating Circle object
function Circle(radius) {
    this.radius = radius;
}

// Making draw() method available to Circle Base
Circle.prototype = Object.create(Shape.prototype); // Object.create() returns the object
Circle.prototype.constructor = Circle;

// Constructor Function for creating square objects
function Square(size) {
    this.size = size;
}

// Making draw() method available to Circle Base
Square.prototype = Object.create(Shape.prototype); // Object.create() returns the object
Square.prototype.constructor = Square;

// Overriding draw() of as per square requirement ; Similarly we can override implementation of circle draw as well
Square.prototype.draw = function () {
    console.log('drawing square');
};

const shape = new Shape();
const circle = new Circle();
const square = new Square();

circle.draw();
square.draw(); // Giving preference to it's own overriden method