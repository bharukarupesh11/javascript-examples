
const _radius = Symbol(); // everytime we call this method it creates a unique symbol
const _draw = Symbol();

class Circle {
    constructor (radius) {
        this[_radius] = radius; // _radius is a private variable
    }

    [_draw] () {
        // private method
        console.log('inside private method draw');
    }

    move () {
        // instance method
        console.log('inside move');
    }
}

const c = new Circle(1);

// Hack to access private members in a class
// const key = Object.getOwnPropertySymbols(c)[0]; // getOwnPropertySymbols() returns an array
// console.log(c[key]);

c.move(); // calling instance method of a class Circle