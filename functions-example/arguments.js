// arguments : Every function in javasacript has a special object called 'arguments'.
//             It kind of look like an array but it's not an array. It's a object.
//             So, if you wanna have a function with a varying number of parameters to work with
//             all the arguments passed to this function we can use arguments object.
function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;

    return total;
}

console.log(sum(1, 2, 3, 4, 5, 5));


// Better Way
// Using rest operator : for varying number of arguments
function sum2(...args) {
    /* return args.reduce((accumulator, currentValue) => {
        return accumulator + currentValue; 
    }, 0); */

    // OR

    return args.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sum2(1, 2, 3, 4, 5, 5));