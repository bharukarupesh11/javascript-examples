let val = "dad";

let splitString = val.split(""); // returns an array ["d", "a", "d"]
let reversedArray = splitString.reverse(); // // Reverse the array: ["d", "a", "d"]
let joinedElements = reversedArray.join(""); // Join the array elements into string


if(val === joinedElements)
    console.log('Palindrome String');


//====================================================

function checkPalindrome(str) {
    const len = str.length;

    for(let i = 0; i < len/2; i++) {
        // check if first and last string are same
        if(str[i] !== str[len - 1 - i])
            return 'Not palindrome';
    }

    return 'Palindrome';
}

console.log(checkPalindrome('amit'));

