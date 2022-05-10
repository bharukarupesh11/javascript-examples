/**
 * Anagram String:
 * An anagram of a string is another string that contains the same characters, only the order of characters 
 * can be different. 
 *      For example: “abcd” and “dabc” 
 */

let str1 = "Mary";
let str2 = "Army";

function isAnagram(first = "", second = "") {
    let a = first.toLowerCase();
    let b = second.toLowerCase();

    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
}

console.log('Is Anagram: ', isAnagram(str1, str2));

isAnagram(str1, str2);
