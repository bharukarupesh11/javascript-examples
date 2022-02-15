/*  
   Reference Types:
      - Objects : An object is any entity. Eg. Person is an object. A person has name, age, address etc.
      - Arrays 
      - Functions 
*/

//JSON (Javascript object notation)
let person = {
    name: 'Rupesh',
    age: 28
};

console.log(person);

//1. dot(.) notation : Change the value of properties using dot notation
person.name = 'Amit'
console.log("Person Name:", person.name);

//2. array('[]') notation : Change the value of properties using array notation
person['name'] = 'Shubham';
console.log("Person Name:", person.name);

//3. Change the value of properties using array('[]') notation in a dynamic way without knowing the value entered by user
let propertyAge = 'age'; //here 'name' should be replace with form id or something dynamic variable
person[propertyAge] = 24;
console.log("Age: ", person.age);

console.log(person);