const numbers = [1, 2, -1, 3, 4];

// Note: All these filter() and map() method returns new array and the existing one is not affected

const filtered = numbers.filter(function (number) {
    return number >= 0; 
}); // returns an array with the element that matches the given criteria 

// Mapping a filtered value with an object
const items = filtered.map(function(num) {
    return {value:num};
});

console.log(items);


// Chaining of methods 
const chainedItems = numbers
                        .filter(number => number >= 0)
                        .map(n => ({value: n}))
                        .filter(obj => obj.value > 1)
                        .map(obj => obj.value); 
console.log(chainedItems);