// Whenever we declare a variable as constant then that means we can't reassign that variable with
// other values. In this case other array. Eg. numbers = []; // Will give us an error
// But, we can surely modify the content of constant variable 
const numbers = [1, 2, 3, 4];

// Removing last element of an array
// const last = numbers.pop();
// console.log(last);

// Removing first element of an array
// const first = numbers.shift();
// console.log(first);


// Removing middle element of an array
numbers.splice(2, 1); //index, number of elements we want to remove
console.log(numbers);