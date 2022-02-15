const numbers = [11, 2, 5, 3, 4];

const max = getMax(numbers);

console.log(max);


function getMax(array) {
    let maxNumber = array[0];

    if(array.length === 0)
        return undefined;

    // for(let element of array) {
    //     if (element > maxNumber)
    //         maxNumber = element;
    // }

    // return maxNumber;

    // When to use reduce() method? : Anytime you have array of values and you want to get a single value as a result
// we can think of the reduce() method.
    return array.reduce((accumulator, currentValue) => {
        if (accumulator > currentValue)
            return accumulator;
        return currentValue;
    });
}