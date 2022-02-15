
// Constructor Function
function Circle(radius) {
    // Instance Members
    this.radius = radius;
}

// Prototype members: Instead of providing separate copies of draw() method to each object
//                    we've defined it in it's prototype(super class i.e. Circle Base)
//                    So, all the objects will refer to only one copy or draw() method available in their prototypes
Circle.prototype.draw = function() {
    console.log('drawing');
}

// Overwriting toString method implementation of object class inside circle prototype
Circle.prototype.toString = function () {
    return 'Circle with radius ' +this.radius;
};


const c1 = new Circle(5);
const c2 = new Circle(5);

console.log(c1);
console.log(c2);

c1.draw(); // because of prototypical inheritance we can still call draw method
console.log(c1.toString());
