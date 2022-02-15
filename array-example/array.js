// Sometimes in our application we might be dealing with list of objects 
//Eg. list of product in shopping cart, list of colors user has selected 
// In this case we use arrays

//So, an array is a data structure that we use to represent a list of items.

let selectedColors = ['red', 'blue'];

console.log(selectedColors);

//add one more element of same type
selectedColors[2] = 'green';
console.log(selectedColors);

//add element of other type in the same array
selectedColors[3] = 234; //This is something which other languages don't allow us.
console.log(selectedColors);

//array properties
console.log("Array size:", selectedColors.length);