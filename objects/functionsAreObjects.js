// In Javascript functions are object 
// Here, in the below example we've created a constructor function Circle()
// Now, to prove our point functions are objects try writing 'Circle.' you will see the properties and methods 


function Circle(radius) {
    this.radius = radius,
    this.draw = function () {
        console.log('draw');
    }
}

console.log(Circle.length); // Circle is a function name used to access global properties. Length will return number of arguments.
console.log(Circle.constructor); // Function() will be returned 

// Note: When we use constructor function syntax to create an object, internally javascript engine 
//       use function constructor to create this object as below,
// So, when we declare a constructor function, internally that is represented like below code,
const Circle1 = new Function('radius', `
this.radius = radius,
this.draw = function () {
    console.log('draw');
}
`);

const another = new Circle1(1);
console.log(another);