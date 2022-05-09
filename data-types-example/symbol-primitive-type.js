/** 
 * Symbols are immutable(can not be changed) and are unique.
 * They can be created using a factory function Symbol() which returns a symbol
 * 
 * Note: Everytime you call a factory function, a new and 'unique' symbol is created.
 * */

const value1 = Symbol('Hello');
const value2 = Symbol('Hello');

console.log(value1 === value2); // output: false
console.log(typeof value1); // output: symbol
console.log('value1: ', value1); // output: Symbol(Hello)
console.log('Description: ', value1.description); // output: Hello