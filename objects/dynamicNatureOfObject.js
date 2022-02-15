// Dynamic nature of object in javascript
// We can add and remove object properties and methods after the cration of object dynamically
// Eg. If we've created a circle object and later in our code want to add one more property to the circle object
//     then that's possible in javascript

const circle = {
    radius: 1,
    draw : function(){
        console.log('drawing a circle object');
    }
};

circle.color = 'yellow'; // adding a 'color' property in circle object
circle.changeColor = function() {} // adding 'changeColor' method in circle object
console.log('After adding new properties and methods to circle object');
console.log(circle); 

delete circle.color; // deleting a 'color' property from a circle object
delete circle.changeColor; // deleting a 'changeColor' method from a circle object
console.log('After deleting circle properties and methods');
console.log(circle);


// Doubt :
/* 
 We've used 'const' keyword to define a constant. However, we've modified the circle object by adding and 
 removing properties in it. So, what kind of constant is that?
 Well, when we use constant here, that means we can't reassign the 'circle' variable as below,

 So, we can't do the reassignment to the circle object but we can add or remove properties in it.
*/

//circle = {}; // Throw Error: Assignment to constant variable
