/* Types of loops in javascript:
      - for 
      - while
      - do while
      - for in : To iterate over properties of an object
      - for of : To iterate over elements or values of an array
*/

// for 
for (let i = 1; i<=5; i++) {
    if (i % 2 !== 0)
        console.log(i)
}

// while
let i = 1;

while (i <=5) {
    if (i % 2 !== 0)
        console.log(i)

    i++;
}


// do-while
let j = 0;
do {
    if (j % 2 !== 0)
        console.log(j)

    j++;
} while (j<= 5);


// for-in 
const person = {
    name:'Rupesh',
    age:30
};

for (let key in person) {
    console.log(key, person[key]);
}

// for-of
const colors = ['red', 'green', 'blue'];

for (let color of colors)
    console.log(color);
