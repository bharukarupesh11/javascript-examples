const arr  = [1, 2, 7];

// map example
const newArr = arr.map(ele => ele > 5); // maps each element and return the new array as a result containing the values returned by that function
console.log(newArr); // output: [false, false, true]


// filter example
const newArr2 = arr.filter(ele => ele > 5); // filters the data based on some condition in the function body
console.log(newArr2); // output: [7]