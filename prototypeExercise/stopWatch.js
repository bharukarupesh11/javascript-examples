// The example below is completely useless as it breaks abstraction principle over optimization 
// technique. So, this has again become an example of 


// Famous Saying: Premature optimization is the root of all evils
// Below is an example of premature optimization which is useless

// Constructor Function 
function Stopwatch() {
    let startTime, stopTime, running, duration = 0;

    Object.defineProperty(this, 'duration', {
        get: function(){ return duration; }, //getter method
        set: function(value) { duration = value; } // setter method
    });

    Object.defineProperty(this, 'startTime', {
        get: function(){ return startTime; },
        set: function(value) { startTime = value; }
    });

    Object.defineProperty(this, 'stopTime', {
        get: function(){ return stopTime; },
        set: function(value) { stopTime = value; }
    });

    Object.defineProperty(this, 'running', {
        get: function(){ return running; }, // getter method
        set: function(value) { running = value; } // setter method
    });
}

// Adding all stopwatch methods to it's protype for optimization purpose 
// But, note that this approach is breaking our abstraction principle by making
// stopwatch properties like startTime, stopTime etc.. available to the outside world i.e. our 
// stopwatch object. What if, our object modifies duration? due to the setter method? which we don't wanted
Stopwatch.prototype.start = function () {
    console.log(this.running); 
    if(this.running)
        throw new Error('Stopwatch has already started.');
    
    this.running = true;

    this.startTime = new Date();
};

Stopwatch.prototype.stop = function() {
    if (!this.running)
        throw new Error('Stopwatch is not started.');

    this.running = false;

    this.stopTime = new Date();

    console.log();
    const seconds = (this.stopTime.getTime() - this.startTime.getTime()) / 1000;

    this.duration += seconds; // we can't modify the duration value unless we have setter in a Stopwatch
};

Stopwatch.prototype.reset = function () {
    this.startTime = null;
    this.stopTime = null;
    this.running = false;
    this.duration = 0;
};

const sw = new Stopwatch();
// sw.duration = 10; // let's say if our object modifies the duration then the result would be wrong