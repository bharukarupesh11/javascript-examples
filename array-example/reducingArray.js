const numbers = [1, -1, 2, 3];

// Old way
// let sum = 0;
// for (n of numbers)
//     sum+=n;
// console.log(sum);

// New way : Use reduce() method
// When to use reduce() method? : Anytime you have array of values and you want to get a single value as a result
// we can think of the reduce() method.

// Execution of reduce ()
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); //second parameter to reduce function is initializing accumulator with default value(zero)

console.log(sum); // 5


// Further shortening above code
// Note: In this case if default value is not assigned to accumulator, it takes first value of array
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum2 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum2);

