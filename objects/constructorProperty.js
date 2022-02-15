// Every object in a javascript has a constructor property and that references 
// a function that was used to create an object 

// Eg - 1
function createCircle(radius) {
    return {
        // radius: radius, //if key and value both are same then no need to explicitely specify the value
        radius, //shorthand for same key-value
        
        //shorthand syntax of defining a method
        draw (){
            console.log('drawing a function')
        }
    };
}

const circle = createCircle(1);
console.log(circle.constructor); // Object() built in constructor function is returned when we create and object using object literal syntax

// Object literal syntax
const x = {};
// let x = new Object(); //Internally javascript engine write it like this


// Eg - 2
function Circle(radius) {
    this.radius = radius,
    this.draw = function () {
        console.log('drawing a circle object')
    }
}

const circle2 = new Circle(1); 
console.log(circle2.constructor); // Circle() function will be returned 
