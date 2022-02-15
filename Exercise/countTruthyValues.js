// Falsy Values 
// undefined, null, '', false, 0, NaN


function countTruthy(values) {
    let count = 0;

    for (let value of values) {
        if(value)
            count++;
    }

    return count;
}

const array = [0, null, undefined, '', 2, 3];
console.log(`Number of Truthy Values: ${countTruthy(array)}`);