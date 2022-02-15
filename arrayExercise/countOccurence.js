
const numbers = [1, 2, 3, 4, 3];

const count = countOccurrences(numbers, 3);

console.log(count);

function countOccurrences(array, searchElement) {
    // let sum = 0;

    // for (let element of array)
    //     if(element === searchElement)
    //         sum += 1;
    // return sum; 

    return array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement) ? 1 : 0;
        console.log(accumulator, currentValue, searchElement);
        return accumulator + occurrence;
    }, 0);
}