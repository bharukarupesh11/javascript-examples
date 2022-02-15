
// Factory Function : Used to create multiple object of same type
// Just like a factory producing products, these factory functions produce objects
function createCircle(radius) {
    const circle = {
        radius: radius, //dynamically receiving value
        location: {
            x: 1,
            y:1
        },

        draw: function(){
            console.log('drawing a function')
        }
    };

    return circle;
}


// 2. Making code slightly shorter by improving it
// Improvements: Since we're not going to refer circle variable anywhere we can remove it and directly return the object
/*function createCircle(radius) {
    return {
        radius: radius, 
        location: {
            x:1,
            y:1
        },

        draw: function(){
            console.log('drawing a function')
        }
    };
}*/

// 3. Making code more shorter by improving it further
// Improvements: In modern javascript No need to write key-value as 'key: value' if both the name are same
/*function createCircle(radius) {
    return {
        // radius: radius, //if key and value both are same then no need to explicitely specify the value
        radius, //shorthand for same key-value
        
        draw: function(){
            console.log('drawing a function')
        }
    };
}*/

// 4. Making code more shorter by improving it further more
// Improvements: Shorter syntax to define the method. So, instead of defining it a key: value pair, we can drop the function keyword 
//               and directly define the name of a function   
/*function createCircle(radius) {
    return {
        // radius: radius, //if key and value both are same then no need to explicitely specify the value
        radius, //shorthand for same key-value
        
        //shorthand syntax of defining a method
        draw (){
            console.log('drawing a function')
        }
    };
}*/


const circle1 = createCircle(1); //calling factory function to receive the circle object
console.log(circle1);

circle1.draw(); //calling a draw() method of circle object