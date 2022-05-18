/** Program to remove given character from string */

removeChar = (str, char) => {
    const arr = str.split("");
    const filteredArr = arr.filter(e => e !== char); // returns filtered array
    
    return filteredArr.join("");
}

const result = removeChar('Hi Rupesh', 'H');
console.log('Result: ', result); // output: i Rupesh      Note: H is removed from Hi word
