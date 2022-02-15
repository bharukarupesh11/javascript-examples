// In javascript we've 2 type of strings i.e. String Primitive and String Object
// To know more about built-in properties and methods of string object,
// visit: developer.mozilla.org 

// String Primitive
const message = 'This is primitive string'; //javascript engine internally wraps this with string object
console.log(typeof message); //"string"

const another = new String('This is object string'); 
console.log(typeof another); //"object"

