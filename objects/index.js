
// Object-oriented Programming (OOP)
// OOP is basically a style of programming where we see a program as a collection of objects that
// talk to each other to perform some functionality

// In OOP terms, if a function is a part of an object then we call it a method. Eg. draw() is a method of circle object

// Below is a object literal syntax or JSON(Javascript object notation)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log('drawing a circle');
    }
 }; //end of circle object

 circle.draw();