// method => obj (If we're calling a method using an object then 'this' references to the current object which is calling a method)
// function => global (window, global) (If we've a normal function outside an object then this references to the global object i.e. window in javascript and global in node)

// First 
const video = {
    title: 'a',
    play() {
        console.log(this); // 1st rule
    }
};

video.play();

// Second
function start(){
    console.log(this); // 2nd rule
}

start();

// Third : check 'this' inside callback function
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

video2.showTags();