
let person = {
    firstName: 'Rupesh',
    lastName: 'Bharuka',

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        if(typeof value !== 'string')
            throw new Error('Value is not a string.');

        if(value.split(' ').length !== 2)
            throw new Error('Enter a first and last name.');
        
        this.firstName = value.split(' ')[0];
        this.lastName = value.split(' ')[1];
    }
};

try {
    // person.fullName = null;
    // person.fullName = '';
    person.fullName = "Amit Agrawal";
    console.log(person);
} catch (error) {
    alert(error);
}