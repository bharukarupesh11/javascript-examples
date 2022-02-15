
const numbers = [1, 2, 3, 4, 5];

// forEach takes a callback function as a parameter
numbers.forEach(function (number) {
    console.log(number);
});

// forEach using arrow operator
numbers.forEach((number) => {
    console.log(number);
});

// Further optimizing arrow operator by removing paranthesis and body of a function for single parameter and statement
numbers.forEach(number => console.log(number));

// Arrow operator can take 2 parameters. 
// Note: For multiple parameters we must add paranthesis around them
numbers.forEach((number, index) => console.log(index, number));