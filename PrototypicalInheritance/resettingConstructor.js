// Below is an example of Creating a object using constructor property dynamically


// Constructor Function for creating Shape object
function Shape() {

}

// Adding duplicate() method to shapebase prototype
Shape.prototype.draw = function () {
    console.log('drawing');
}

// Constructor Function for creating Circle object
function Circle(radius) {
    this.radius = radius;
}

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() === new Circle(); // both are exactly same

// Making draw() method available to Circle Base
Circle.prototype = Object.create(Shape.prototype); // Object.create() returns the object

// As a best practice, whenever we reset the prototype of an object as done above, we shall also reset 
// the constructor property of an object
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

// const circle = new Circle.prototype.constructor(1); // to dynamically create an object using constructor property
const circle = new Circle(1); // both the way of creating object are equal
const square = new Square(123);

circle.draw();
square.draw(); // Giving preference to it's own overriden method