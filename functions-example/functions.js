
function square(number) {
    return number * number;
}

console.log('Square of number: ' + square(2));

/**
   Template Literals are String Literals allowing embedded expressions.
   It makes to code more cleaner than the syntax above of '+'

   Dollar Sign with Curly Brace is a placeholder.
*/
console.log(`Square of number: ${square(3)}`);

/**
 * querySelector() function will get a reference to h2 heading tag and
 * then store it in a variable called heading2.
 * 
 * This is similar to what we do using CSS selectors. When you want to do something
 * to an element, you need to select it first.
 */
const heading2 = document.querySelector('h2');
heading2.textContent = 'This is heading2';

