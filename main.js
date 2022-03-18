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
console.log(s.split(''));

//creating arrays from strings
const a = 'technology, computers, it, code';
console.log(a.split(', '));

//Arrays - variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

//add Arrays to end
fruits.push('mangos');

//add Arrays to front
fruits.unshift('Pineapples');

//Take last Array off
fruits.pop();

//check to see if something is a Array
console.log(Array.isArray(fruits));

console.log(fruits);

//Object Literals
const person = {
    firstName: 'Andre',
    lastName: 'Turner',
    age: 28,
    hobbies: ['music', 'video games', 'sports'],
}

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);

//Add properties to object literals
person.email = 'turnerdandre23@gmail.com';
console.log(person);

//Creates Variables in object literals - Advanced
const { firstName, lastName } = person;
console.log(firstName, lastName);

//Creating Array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appt',
        isCompleted: false
    },
];

console.log(todos);
console.log(todos[1].text);

//Loops

//FOR Loop
for(let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

//WHILE Loops
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

//LOOP through Arrays
for(let todo of todos) {
    console.log(todo.text);
}

/* HIGH ORDER ARRAY METHODS
1. forEach - Loops through arrays
2. map- Allow us to create a new array from an array
3. filter - allow us to create a new array based on a conditon*/

//forEach
todos.forEach(function(todo) {
  console.log(todo.text);
});

//Map
const todoText = todos.map(function(todo) {
   return todo.text;
});

console.log(todoText);

//Filter
const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
});

console.log(todoCompleted);

//Conditionals IF, ELSE
// == is true
// === matches data type
// ( || )character means - OR
// ( && ) character means - AND
// ( : ) character means - ELSE


/*const x = 4;

if(x === 10) {
    console.log('x is 10');
} else if(x > 10) { 
    console.log('x is greater than 10');

} else {
    console.log('x is less than 10');
}*/

//Multiple Conditionals

/*const x = 4;
const y = 11;

//OR Example
if(x > 5 || y > 10) {
  console.log('x is more than 5 or y is more than 10');
}

//AND Example
if(x > 5 && y > 10) {
    console.log('x is less than 5 and y is more than 10');
}*/

// Turnery Operator - ?
const x = 14;

const color = x > 10 ? 'red' : 'blue';

console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue' :
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

//FUNCTIONS

function addNums(num1,num2) {
    console.log(num1 + num2) ;
}

addNums(5,4);







