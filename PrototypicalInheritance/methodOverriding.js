
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

// Method Overriding draw() of as per square requirement ; Similarly we can override implementation of circle draw as well
// Note: It's very important to override the method after resetting the prototype.
// That means after we call extend() method
Circle.prototype.draw = function () {
    // Shape.prototype.draw.call(this); // calliing super class duplicate method. Note: call() is used to set the context to 'this'
    console.log('drawing circle');
};

const shape = new Shape();
const circle = new Circle(1);

circle.draw();