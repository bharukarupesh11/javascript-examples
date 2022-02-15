
// Factory Function(camel notation) : To creates address object
function createAddress (street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

const addressObject = createAddress('MG Road', 'Indore', '234134');
console.log(addressObject);


// Constructor Function(pascal notation) : To create address object
function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

const addressObject2 = new Address('High Street', 'Mumbai', '234432');
console.log(addressObject2);