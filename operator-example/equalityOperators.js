/**
 * There're 2 types of equality operators in javascript.
 * 
 * 1. Strict Equality (===) : Ensures that both the values have same type and same value.
 *                            Eg. console.log(1 === 1); //true
 *                                console.log('1' === 1); //false
 * 
 * 2. Lose Equality (==) : Ensures that both the values are exactly same.
 *                         Eg. console.log('1' == 1); 
 *                         In the above example '==' operator converts the numerical value to the string and returns true as a result,
 *                             console.log('1' == '1'); //true
 *                         In short '==' operator doesn't check for the type of value instead it checks for the value itself.
 */                        

let a = "23"; 
let b = 23; 

/* The ‘==’ operator tests for abstract equality i.e. it does the necessary type conversions before doing the equality comparison. */
if (a == b) {
    console.log('After type conversion by the == operator:');
    console.log(`values ${a} and ${b} are equal!`);
} else {
    console.log('Using == operator:');
    console.log(`values ${a} and ${b} are not equal!`);
}


/** 
 * The ‘===’ operator tests for strict equality i.e. it will not do the type conversions hence if the two values
 * are not of the same type, when compared, it will return false.
*/
if (a === b) {
    console.log('Using === operator:');
    console.log(`values ${a} and ${b} are equal!`);
} else {
    console.log('=== operator does not do type conversion:');
    console.log(`values ${a} and ${b} are not equal!`);
}


//Example: 2
console.log(`Using == operator: ${'Rupesh' == new String('Rupesh')}`);
console.log(`Using === operator: ${'Rupesh' === new String('Rupesh')}`);


//Example: 3
console.log(`Using == operator: ${1 == true}`); //1 is of type number and true is of type boolean
console.log(`Using === operator: ${1 === true}`); //Strictly checking the type of values
