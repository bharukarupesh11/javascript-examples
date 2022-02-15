
sum(10); // Calling sum() function

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

function sum(limit) {
    let sumOfMultiples = 0;
    
    for (let i=1; i<=limit; i++){
        if ((i%3 === 0) || (i%5 === 0)) {
            sumOfMultiples = sumOfMultiples + i;
        }
    }

    console.log('Limit: ' +limit);
    console.log('Sum of Multiple of 3 & 5: ' +sumOfMultiples);
}