
let person = {
    name: 'rupesh',
    city: 'jalna'
}

// we can see base object in the console associated with a person object
// so we can use its methods Eg. person.toString()
console.log(person); 

// Now, let's get the object base to see the property descriptor of toString() method
let objectBase = Object.getPrototypeOf(person); // return the prototype i.e. super class(Object) in this case
let propertyDescriptors = Object.getOwnPropertyDescriptor(objectBase, 'toString'); // returns an object which we call a property descriptor
console.log(propertyDescriptors); // {configuration: true, writable: true etc...}

// So, we can set these above properties {configuration: true, writable: true etc...} for our 
// own object as well as below,
Object.defineProperty(person, 'name', {
    writable: false, // now we can not change the value of name property in our person object
    enumerable: false, // I can not iterate name property
    configurable: false // now I can not delete name property
});


person.name = 'John'; // writable
console.log(person.name); // still get rupesh
console.log(Object.keys(person)); // only city will be displayed

delete person.name; // configurable 
console.log(person.name); // still get rupesh


//Reference: https://medium.com/jspoint/a-quick-introduction-to-the-property-descriptor-of-the-javascript-objects-5093c37d079