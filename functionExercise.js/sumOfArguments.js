
// const result = sum([1, 2, 3, 4]);
//OR 
const result = sum(1, 2, 3, 4);
console.log(result);

function sum(...args) {
    // args is an array of array in case an array is passed as an argument to a sum()
    // Whenever we pass any argument to a 'rest operator', it converts that argument into an array 
    // that's why whenever we pass array as a argument it becomes array of an array
    // console.log(args); 

    if (args.length === 1 && Array.isArray(args[0])) {
        args = [...args[0]]; // extracting 1st element from an args i.e. array
        return args.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
    }

    // for normal parameters passed to this function
    return args.reduce((a, b) => a + b);
}