// Whenever we declare a variable as constant then that means we can't reassign that variable with
// other values. In this case other array. Eg. numbers = []; // Will give us an error
// But, we can surely modify the content of constant variable 
const numbers = [3, 4];

// Adding element to the End of an array
numbers.push(5, 6);

// Adding elements to the Beginning of an array
numbers.unshift(1, 2);

// Adding elements in the Middle of an array
numbers.splice(2, 0, 'a', 'b'); //index, delete-count, new elements

console.log(numbers);