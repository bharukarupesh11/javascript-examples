
const numbers = [1, 2, 3];
const joinedString = numbers.join(','); // join() method returns a string
console.log(joinedString);

// Split () method on string : Returns an array
const message = 'This is my first message';
const parts = message.split(' '); // split on the basis of space
console.log(parts);

// This technique is useful when building a URL slug
// Eg. https://stackoverflow.com/questions/9543518/creating-arrays-in-javascript
const combined = parts.join('-'); 
console.log(combined);

