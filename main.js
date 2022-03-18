// let, const

//Let - You can reassign values//

//Let Examples//

/*let score = 30;

score = 30

console.log(score);*/

//DATA TYPES- Strings, Numbers, Boolean, null, undefined//

/*String const name = 'John';
Number const age = 30;
Number (decimal) const rating = 4.5;
Boolean const isCool = true;
null const x = null;
undefined  const y = undefined; */

//Strings Examples//

const name = 'John';
const age = 30;

//Concatenation
console.log('My name is' +  name + ' and I am' + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);

const s = 'Hello World!';

console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
//console.log(s.split(''));

//creating arrays from strings
const a = 'technology, computers, it, code';
console.log(a.split(', '));

//Arrays - variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
