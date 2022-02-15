
const movie = {
    title:'Kuch Kuch Hota Hai',
    releaseYear: 2010,
    rating: 4.5,
    actor: 'Shah Rukh Khan'
};

showProperties(movie);

function showProperties(obj) {
    for(let key in obj) {
        if (typeof obj[key] === 'string'){
            console.log(key +":" +obj[key]);
        }
    }
}