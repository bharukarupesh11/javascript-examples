// Implementation Details - Not exposed to outside world
const _radius = new WeakMap();

// Public Interface
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radiuse ' +_radius.get(this));
    }
}

// ES5: CommonJS Module Syntax
module.exports = Circle; // returns an object of type circle 