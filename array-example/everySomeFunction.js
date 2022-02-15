const numbers = [1, 2, -1, 3, 4];

// Note: every() and some() methods are provided in new javascript which some of the older browser does not support

// every() method: Checks if all the elements in an array are positive or not
const allPositive = numbers.every(function(value){
    return value >= 0; //returns boolean value
});

console.log(allPositive); //false


// some() method: Checks if at least one of the element in an array is positive 
const anyPositive = numbers.some(function(value){
    return value >= 0; //returns boolean value
});

console.log(anyPositive); //true
