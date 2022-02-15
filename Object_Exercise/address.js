
const address = {
    street: 'MG Road',
    city: 'Pune',
    zipCode: '431123'
    
};

function showAddress(address) {
    for (let key in address)
        console.log(`${key} : ${address[key]}`);
}

showAddress(address);
