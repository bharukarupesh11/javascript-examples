// Object Literal - {}
// Boolean Literal - true, false
// String Literal - '', ""
// Template Literal - ``

// Template literal is particularly useful when we want to send out email 
// messages in our application. So, we can format our string the way we want easily.
// Another benefit is, template literal allow us to add placeholder using a dollar sign and curely braces Eg. ${name}
const message = `This is my 
'first' message`;

console.log(message);

const name = 'John';
const emailMessage = 
`Hi ${name},

Thank you for joining my mailing list.

Regards,
Rupesh`;

console.log(emailMessage);