
const currentDate = new Date();
console.log(currentDate);

currentDate.setFullYear(2020); // Changing the year
console.log(currentDate);

// Another way of creating Date Object
const date2 = new Date('May 11 2018 09:00');
const date3 = new Date(2018, 4, 11, 9); //year, month(May), day, time : Month index starts from Zero
