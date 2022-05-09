/**
 * Note:
 * - Primitive values are passed by values in javascript 
 * - Whereas, all objects are passed by reference in javascript.
 */


let person = {
    name: 'john',
    age: 25
};

function increaseAge(obj) {
    obj.age += 1; // here obj is pointing to the same memory address of person
}

increaseAge(person);

console.log(person); // Output: {name: 'john', age: 26 }; Note: value changed in the original person object