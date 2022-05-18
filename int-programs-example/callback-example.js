/**
 * What is callback function?
 * - A callback is a function that is passed as an argument to another function. .
 *   A callback function is executed "after some operation has been completed".
 * 
 *   Run "node callback-example.js" to execute this program.
 */

function insertElement(arr = [], callback) {
    arr.push(100)

    callback();
}

var elements = [1, 2, 3];

insertElement(elements, function() {
    console.log("Modified Array: ", elements);
});
