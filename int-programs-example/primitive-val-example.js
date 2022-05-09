// Primitive type variables are allocated memory on the stack

let a = 5;
let b = a; // Note: here we are not copying address of variable a instead copying value i.e. 5 into 'b' 


console.log(`Before changing value of a: ${a === b}`); // true

a = 15; // changing the value of variable 'a' will not change the value of variable 'b'

console.log(`After changing value of a: ${a === b}`); // false: because of mismatched values