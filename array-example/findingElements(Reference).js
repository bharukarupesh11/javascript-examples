
const courses = [
    {id: 1, name: 'C'},
    {id: 2, name: 'Java'}
];

// find method requires function as a parameter which we call a 'predicate' or 'callback function'
// find method returns the result if the criteria matches; otherwise returns undefined
const courseResult = courses.find(function (course) {
    return course.name === 'Java';
});

// findIndex() returns the index of the matching element in an array; otherwise returns -1
const courseResult2 = courses.findIndex(function (course) {
    return course.name === 'Java';
});

console.log(courseResult);
console.log(courseResult2); 



