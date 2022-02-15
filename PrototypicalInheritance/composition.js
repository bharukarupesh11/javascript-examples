
// here using rest operator
function mixin(target, ...sources)  {
    Object.assign(target, ...sources); // here using spread operator to expand the array created by rest operator above
}

const canEat = {
    eat: function() {
        console.log('eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

const canSwim = {
    swim: function() {
        console.log('swiming');
    }
};


// Constructor Function
function Person(name){
    this.name = name;
}

mixin(Person.prototype, canEat, canWalk);


function Goldfish(){

}

mixin(Goldfish.prototype, canEat, canSwim);

const person = new Person('rupesh');
console.log(person);

const goldfish = new Goldfish();
console.log(goldfish);
