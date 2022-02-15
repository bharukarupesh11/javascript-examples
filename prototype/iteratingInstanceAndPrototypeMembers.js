// Constructor Function
function Circle(radius) {
    // Instance Members
    this.radius = radius;

    this.move = function() {
        console.log('moving');
    };
}

// Prototype members: Instead of providing separate copies of draw() method to each object
//                    we've defined it in it's prototype(super class i.e. Circle Base)
//                    So, all the objects will refer to only one copy or draw() method available in their prototypes
Circle.prototype.draw = function() {
    console.log('drawing');
}


const c1 = new Circle(5);

// Objects.keys() returns instance members
console.log(Object.keys(c1));

// for-in loop returns all memberes (instance + prototype)
for (let key in c1) 
    console.log(key);

console.log(c1.hasOwnProperty('radius')); // true because radius is a instance property which is directly available to c1
console.log(c1.hasOwnProperty('draw')); // false because draw is a prototypical property which is indirectly available to c1