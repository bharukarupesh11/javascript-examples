
const movies = [
    {title:'a', year: 2018, rating: 4.5},
    {title:'b', year: 2018, rating: 4.7},
    {title:'c', year: 2018, rating: 3},
    {title:'d', year: 2017, rating: 4.5}
];


// All the movies in 2018 with rating > 4
// Sort them by their rating 
// Descending order
// Pick their title
const movieTitles = movies
    .filter(function(movie){
        return (movie.year === 2018 && movie.rating > 4);
    })
    .sort(function(object1, object2) {
        if (object1.rating < object2.rating) return -1;
        if (object1.rating1 > object2.rating) return 1;
        return 0;
    })
    .reverse() /* to get the descending order */
    .map(movie => movie.title);

console.log(movieTitles);
 

// Another Way
const movieTitles2 = movies
    .filter(function(movie){
        return (movie.year === 2018 && movie.rating > 4);
    })
    .sort((object1, object2) => object1.rating - object2.rating)
    .reverse() /* to get the descending order */
    .map(movie => movie.title);