//Logical AND (&&)
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan); //true


//Logical OR (||)
 highIncome = false;
 eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan); //true

//NOT (!)
let applicationRefused = !eligibleForLoan;
console.log(`Application Refused : ${applicationRefused}`);

//=========================================================================

//Logical operators with Non-Booleans
// Falsy Values are:
// undefined
// null
// 0 
// false
// ''
// NaN (Not a Number)

// Anything that is not Falsy -> Truthy
// Eg. false || 'Mosh'  -> "Mosh" is the result because it's a truthy value

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);