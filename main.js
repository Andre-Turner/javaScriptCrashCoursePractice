/*Element Selectors

Single Element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

Multiple Element
console.log(document.querySelectorAll('.item'));*/

const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
