// program to check an Armstrong number of three digits
/**
 * In the case of an Armstrong number of 3 digits, the sum of cubes of each digit
 * is equal to the number itself. 
 * 
 * For example, 153 is an Armstrong number because
 * 153 = (1*1*1) + (5*5*5) + (3*3*3);
 * 
 */

let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');
let temp = number; 

while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}