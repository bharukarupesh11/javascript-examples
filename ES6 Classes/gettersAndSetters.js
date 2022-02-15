
const _radius = new WeakMap();

class Circle {
    constructor (radius) {
        _radius.set(this, radius); // this will reference to the current object here
    }

    // This looks like a function but we can access it like a property
    get radius() {
        return _radius.get(this); 
    }

    set radius(value) {
        if (value <= 0) throw new Error('invalid radius');

        _radius.set(this, value);
    }
}

const c = new Circle(23);

console.log(c.radius); // calling a getter method

c.radius = 50; // calling a setter method

console.log(c.radius); // calling a getter method