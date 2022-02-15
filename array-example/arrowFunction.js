
const courses = [
    {id: 1, name: 'C'},
    {id: 2, name: 'Java'}
];

// find method requires function as a parameter which we call a 'predicate' or 'callback function'
// find method returns the result if the criteria matches; otherwise returns undefined
const courseResult = courses.find(function (course) {
    return course.name === 'Java';
});

console.log("courseResult: ");
console.log(courseResult);


// In ES6 there's a shorter way to write the same code using an arrow function
// So, whenever we want to pass a function as a callback function as a argument for a different method
// we can use arrow function syntax as below

// Eg. 1  - Removing function keyword
const courseResult2 = courses.find((course) => {
    return course.name === 'Java';
});
console.log("courseResult2: ");
console.log(courseResult2);

// Eg. 2 - If we've only 1 parameter and 1 statement in a function,
//         we can remove paranthesis, function body and return statement as well
//         So, here we are finding a course with the name equal to 'Java' 
const courseResult3 = courses.find(course => course.name === 'Java');
console.log("courseResult3: ");
console.log(courseResult3);
