
const numbers = [1, 2, -1, 3, 4];

const filteredArray = numbers.filter(function(number){
    return number >= 0;
}); // returns an array with the element that matches the given criteria 

console.log(filteredArray);


// Converting a callback function with arrow operator
const filteredArray2 = numbers.filter(number => number >= 0); // returns an array with the element that matches the given criteria 
console.log(filteredArray2);