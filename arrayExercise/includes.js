const numbers = [1, -1, 2, 3];

console.log(includes(numbers, 2));

// To check if array contains the given number or not
function includes(numbers, searchElement){
    for (let number of numbers)
        if(number === searchElement)
            return true;
        return false;
}
