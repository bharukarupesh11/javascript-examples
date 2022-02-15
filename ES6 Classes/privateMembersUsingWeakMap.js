
// creating private member using weakmap
const _radius = new WeakMap(); // keys are objects and values can be anything
const _move = new WeakMap(); // defining a private method

class Circle {
    constructor (radius) {
        // private member
        _radius.set(this, radius); // this represents the instance of circle object which key here in our map and radius is a value

        // _move.set(this, function() {
            // private function 
            // by default body of the class in ES6 is executed in strict mode so 'this' in this case will be set to undefined. 
            // so how do we set 'this' to refernce to the current object - Use fat arrow technique
            // console.log('move', this); 
        // });

        // arrow function use the 'this' value of their containing function
        _move.set(this, () => {
            console.log('move', this); // now 'this' will reference to the current object
        });
    }

    // public method
    draw() {
        console.log(_radius.get(this)); // given a key to get() method will return a value
        //_move.get(this) (); // equal to below 2 different statements
        let func = _move.get(this); // calling a move() private method and get will return a function
        func();
    }
}

const c = new Circle(1);

c.draw();
