
// Divisible by 3 => Fizz                 Eg. 3
// Divisible by 5 => Buzz                 Eg. 5
// Divisible by both 3 and 5 => FizzBuzz  Eg. 15
// Not divisible by 3 and 5 => input      Eg. 7
// Not a number => 'Not a number'

const output = fizzBuzz('rupesh');
console.log(output);

function fizzBuzz(input) {

    if (typeof input !== 'number')
        return NaN; //If the mathematical result is not a number then return this value 'NaN'
    
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';
    
    if (input % 3 === 0) 
        return 'Fizz';
    
    if (input % 5 === 0)
        return 'Buzz';
        
    return input;
}
