
const circle = {
    radius: 1,
    draw() {
        console.log('drawing a circle');
    }
};

console.log('Printing Circle: ', circle);

// 1. Old Way of cloning
const another = {};
for (let key in circle)
    another[key] = circle[key];

another.color = 'pink'; // This won't affect the original circle object above
console.log('Printing Another: ', another);
console.log('Printing Circle Again: ', circle);


// 2. Using Object.assign() method : Used to combine properties and methods of multiple objects into one single object
// Here, we can pass multiple object as a parameter after 'circle'
const another2 = Object.assign({}, circle); 
console.log('Printing Another2: ', another2);


// 3. Using spread(...) operator
const another3 = { ...circle }; //spreads the properties and methods of circle object to this another3 object
console.log('Printing Another3: ', another3);
