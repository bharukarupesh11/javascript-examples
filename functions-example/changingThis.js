// Problem: this will point to global window object, So how to change it's reference to our object?
function playVideo(a, b) {
    console.log(this, a, b); 
}

// Solution: Functions are objects in javascript so look at the below methods available
// Difference between call and apply is the way other argument need to pass
playVideo.call({name: 'rupesh'}, 1, 2); // 'this' will point to this object now. Output: {name: 'rupesh'}, 1, 2

// OR
playVideo.apply({name: 'rupesh'}, [1, 2]); //Output: {name: 'rupesh'}, 1, 2

// OR  bind() crates a new function and return it same as we write a function
let fun = playVideo.bind({name: 'Rupesh'}); //Output: {name: 'rupesh'}, undefined, undefined
fun();



// First way of changing 'this' reference
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            // here 'this' is pointing to global window object because callback function is not a method 
            // of video object instead it's a normal global function 
            // console.log(this, tag); // window object
            // console.log(this.title, tag); // undefined

            // Solution :
            console.log(this.title, tag); // pass 2nd parameter to forEach function
        }, this);
    }
};
// video2.showTags();


// Second way of changing 'this' reference by creating a local variable inside a method
const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const that = this; //that or self anything can be named to a variable
        this.tags.forEach(function(tag) {
            // here 'this' is pointing to global window object because callback function is not a method 
            // of video object instead it's a normal global function 
            // console.log(this, tag); // window object
            // console.log(this.title, tag); // undefined

            // Solution :
            console.log(that.title, tag); // create a local variable inside showTags()
        });
    }
};
// video3.showTags();



// Third way of changing 'this' reference by calling a bind() method because bind method returns a function which can be supplied to forEach() method
const video4 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            // here 'this' is pointing to global window object because callback function is not a method 
            // of video object instead it's a normal global function 
            // console.log(this, tag); // window object
            // console.log(this.title, tag); // undefined

            // Solution :
            console.log(this.title, tag); // call a bind() method
        }.bind(this));
    }
};
// video4.showTags();


// Fourth way of changing 'this' reference by calling using a '=>' arrow operator
// The good thing about an arrow function is they inherit the 'this' value
const video5 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => console.log(this.title, tag));
    }
};
video5.showTags();
