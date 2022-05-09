// Memory for objects are allocated on the heap 

let a = {'name':'Rupesh'};
let b = a; // Note: Here both the variables are pointing to the same memory address in the heap area 

console.log(`Value of a: ${a.name}`); // Rupesh
console.log(`Value of b: ${b.name}`); // Rupesh

console.log(a === b); // true

a.name = 'Amit';

console.log(`Value of a: ${a.name}`); // Amit
console.log(`Value of b: ${b.name}`); // Amit

console.log(a === b); // true

a = {'name' : 'Raj'};
console.log(a === b); // false: Because, now this a obj is pointing to other memory location of new obj assigned to it

console.log(`Value of a: ${a.name}`); // Raj
console.log(`Value of b: ${b.name}`); // Amit