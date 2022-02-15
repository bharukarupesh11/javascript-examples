// Creating address object
let address1 = new Address('MG Road', 'Pune', '234123');
let address2 = new Address('High Street', 'Mumbai', '234123');
let address3 = address1;

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));


// Constructor Function(pascal notation) : To create address object
function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

// To check the if the properties in objects are equal or not
function areEqual(address1, address2) {
    let flag = 0;
    const equalLength = Object.keys(address1).length === Object.keys(address2).length ? true : false;
    
    if(equalLength) {
        for (let i= 0; i< Object.keys(address1).length; i++){
            if(Object.keys(address1)[i] === Object.keys(address2)[i]){
                console.log(Object.keys(address1)[i] +":" +Object.keys(address2)[i]);
                flag = 1; 
            }else {
                console.log(Object.keys(address1)[i] +":" +Object.keys(address2)[i]);
                flag = 0;
                break;
            }
        }
    }

    if (flag)
        return true;
    
    return false;    
}

//To check, if both the object pointing to the same memory location or not
function areSame(address1, address2) {
    return address1 === address2;
}




