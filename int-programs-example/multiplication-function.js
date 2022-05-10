/** This is also called closure in javascript. 
 *  So, a closure is an inner function that has an access to outer functions variable. 
 */


function multiply(val1) {
    return function(val2) {
        return function(val3) {
            return val1 * val2 * val3; // inner function accessing the outer function variable
        }
    }
}


console.log(multiply(2)(3)(4)); // output: 24