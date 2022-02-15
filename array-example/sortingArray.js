const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'Javascript'}
];

// sorting an array on the basis of name of course
courses.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1; 
    return 0; // if both the names are equal
});

console.log(courses);