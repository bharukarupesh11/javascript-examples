
// Constructor Function for creating Shape object
function Shape() {

}

// Adding draw() method to shapebase prototype
Shape.prototype.draw = function () {
    console.log('drawing');
}

// We've clubbed below lines intor a function to minimize chances of making error. This approach is called intermediate function inheritance.
function extend(Child, Parent) {
    // Making draw() method available to Child object
    Child.prototype = Object.create(Parent.prototype); // Object.create() returns the object
    Child.prototype.constructor = Child;
}

// Constructor Function for creating Circle object
function Circle(radius) {
    this.radius = radius;
}

extend(Circle, Shape);

// Constructor Function for creating square objects
function Square(size) {
    this.size = size;
}

extend(Square, Shape);

// Method Overriding draw() of as per square requirement ; Similarly we can override implementation of circle draw as well
// Note: It's very important to override the method after resetting the prototype.
// That means after we call extend() method
Square.prototype.draw = function () {
    console.log('drawing square');
};

const shape = new Shape();
const circle = new Circle(1);
const square = new Square(123);

circle.draw();
square.draw(); // Giving preference to it's own overriden method