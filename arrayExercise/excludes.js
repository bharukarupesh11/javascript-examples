
const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 2, 5, 6]);
console.log(output);

// To exclude the element of provided array from an original array
function except(array, excludedArray) {
    let output = [];

    for (let element of array)
        if(!excludedArray.includes(element))
            output.push(element);
    
    return output;
}