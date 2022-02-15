
const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1); // array, index, offset
 
console.log(output);

function move(array, index, offset) {
    const position = index + offset;

    if (position >= array.length || position < 0){
        console.error('Invalid offset');
        return ;
    }

    const output = [...array]; //clone of original array
    const element = output.splice(index, 1) [0]; //removing an element from the index position
    output.splice(index + offset, 0, element); // adding an element to the index position

    return output;
}