'use strict'; // to prevent 'this' from referencing to global 'window' object in the browswer.


function Circle(radius) {
    this.radius = radius;

    this.draw = function(){
        console.log(this);
    }
}

const c = new Circle(234);

// Method Calling
c.draw(); // in this case this will point to our object 'c'

const draw = c.draw; // getting just a reference to draw method

// Function calling: in this case this will point to global window object of a browser
draw(); // So, to prevent global window object from modifying accidently we use 'strict mode' and 'this' will be set to undefined now


// Note: By default the body of Modern ES6 classes uses strict mode.