/** program to find max occuring character in string */

getMapOfString = (str) => {
    const arr = str.split("");
    const map = {};

    arr.forEach(ele => {
        map[ele] = map[ele] ? map[ele] + 1 : 1;
    });

    return map;
};

getMaxOccuringChar = (str) => {
    const obj = getMapOfString(str);
    console.log(obj);
    let max = 1;
    let char = str[0];

    for(let i in obj) {
        if(obj[i] > max) {
            max = obj[i];
            char = i;
        }
    }

    return char;
}

console.log(getMaxOccuringChar('Hello World')); // output: 'l' because character 'l' has occurred 3 times in the string


