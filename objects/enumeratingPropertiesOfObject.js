
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// 1. Using for-in loop
for (let key in circle)
    console.log(key, circle[key]);

// 2. Using Object.keys() method
for (let key of Object.keys(circle)) //returns array of string with all keys in circle object
    console.log(key);

// 3. Using Object.entries() method
for (let entry of Object.entries(circle)) //returns each key-value pair as an array
    console.log(entry);

// 4. 'in' operator : To check if a particular key is present in a given object
if ('radius' in circle)
    console.log('radius key is present in circle object');
