
let person = {
    firstName: 'Rupesh',
    lastName: 'Bharuka',

    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        this.firstName = value.split(' ')[0];
        this.lastName = value.split(' ')[1];
    }
};

// Calling a getter method
console.log(person.fullName);

// Calling a setter method
person.fullName = 'Amit Agrawal';

console.log(person);