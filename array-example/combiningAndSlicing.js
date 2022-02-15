
const first = [1, 2, 3, 4];
const second = [5, 6, 7];

const combinedArray = first.concat(second);
console.log(combinedArray);

const copyingArray = combinedArray.slice(); // copy element of combinedArray to copyingArray
console.log(copyingArray);

const slicedArray = combinedArray.slice(2); // get all the elements from the specified index
console.log(slicedArray);

const slicedArray2 = combinedArray.slice(2, 4); // get the element from the specified start index till the end index excluding of end
console.log(slicedArray2);


// When dealing with an object of array, an object is copied by it's reference.
// So, if tomorrow we change the value of any object in an array then that will reflect to everywhere it
// has been referred to
const objectArray = [{ id: 1}];
const primitiveArray = [4, 5, 6];

const combinedArray2 = objectArray.concat(primitiveArray);
console.log(combinedArray2);

// Changing object in an objectArray
objectArray[0].id = 222;
console.log(combinedArray2); // Note: The id of an object in combinedArray2 is also changed
