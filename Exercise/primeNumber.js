
//5 = 1,2,3,4,5

function displayPrimeNumbers(no) {
    let prime = 1;

    for (let i = 2; i <= no/2; i++) {
        if(no % i === 0){
            prime = 0;
            break;
        }
    }

    if (prime === 1)
        console.log('Prime Number');
    else    
        console.log('Not a Prime Number');
}

displayPrimeNumbers(2);