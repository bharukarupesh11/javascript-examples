
// ES6 Classes: Class Declaration Syntax
class Circle {
    constructor (radius) {
        // instance members
        this.radius = radius;
        this.draw = function () {
            console.log('drawing');
        }
    }

    // prototypical member: instance method
    moveBy() {
            console.log('moving');
    }

    // Static Method: Used as a utility method common for all the objects
    static parse(str) {
        const jsonObj = JSON.parse(str);
        const radius = jsonObj.radius;
        return new Circle(radius);
    }
}

// classes forces us to use new operator for creating an objects ; otherwise gives an error
const circle = Circle.parse('{"radius":1}'); // calling a static method on class
console.log(circle);