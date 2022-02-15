//Decimal  Binary
//1 = 00000001
//2 = 00000010
//3 = 00000011  (Result of Bitwise OR)
//0 = 00000000  (Result of Bitwise AND)

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND


// Access Control System
// User Permission - Read, Write and Execute
// 00000100 - Read Permission
// 00000010 - Write Permission
// 00000001 - Read, Write and Execute Permission

const readPermission = 4; // Equivalent to 00000100
const writePermission = 2; // Equivalent to 00000010
const executePermission = 1; // Equivalent to 00000001

let myPermission = 0;  
myPermission = myPermission | readPermission | writePermission;

console.log(`my permission value: ${myPermission}`);
let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(`Has read permission? ${message}`);

// Takeaway:
// With Bitwise 'OR' we can add permission 
// With Bitwise 'AND' we can check to see if we have a given permission




