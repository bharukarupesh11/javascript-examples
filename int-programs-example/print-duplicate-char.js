// Program to print duplicate character from string

var str = "wefdwd";

mapOfString = (val) => {
    const map = {};

    val.split("").forEach(e => {
        map[e] = map[e] ? map[e] + 1 : 1; 
    });

    return map;
};

getDuplicateCharacters = (str) => {
    const arr = [];
    const obj = mapOfString(str);

    for(let i in obj) {
        if(obj[i] > 1)
            arr.push(i);
    }

    return arr.join("");
};

console.log(getDuplicateCharacters(str)); // otuput: wd

