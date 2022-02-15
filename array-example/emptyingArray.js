
let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1
// numbers = [] // This will not make another reference empty; instead this approach will point to a new array reference which is empty

// Solution 2
// numbers.length = 0; // This will also make all the references an empty because all are pointing to same array

// Solution 3 
// numbers.splice(0, numbers.length); //starting index till it's length

// Solution 4 : Not recommended
while(numbers.length > 0)
    numbers.pop();

console.log(numbers);
console.log(another);