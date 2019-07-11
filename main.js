// var, let, const

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//    street: '50 main st',
//    city: 'Boston',
//    state: 'MA'
//   }
// }

// // Destructing
// const { firstName, lastName, address: { city } } = person;
// console.log(firstName); // => John 
// console.log(city) // => boston



// // map, filter..
// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true
//   },
//   {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false
//   }
// ]

// const todoCompleted = todos.filter(function(todo) {
//   return todo.isCompleted === true;
// }).map(function(todo) {
//   return todo.text;
// })

// console.log(todoCompleted); // => ["Take out trash", "Meeting with boss"]


// // arrow function
// const addNums1 = function (num1 = 1, num2 = 1) {
//   return num1 + num2;
// }
// console.log(addNums1(5, 5)); // => 10

// // same as above
// const addNums2 = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums2(5, 5)); // => 10

// todos.forEach((todo) => console.log(todo));


// // Lexical this 
// // Constructor function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);

// }

// // Buy using "prototype", you can implement function inside of "_proto_".
// Person.prototype.getBirthYear = function() {
//   return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }

// // ========================
// // Class (same as above)
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//  getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }


// // Instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');

// console.log('birth year ' + person1.getBirthYear());
// console.log('full Name ' + person1.getFullName());


// console.log(person1); // => Person {firstName: "John", lastName: "Doe", dob: "4-3-1980"}
// console.log(person2.firstName); // => Mary
// console.log(person2.dob); // =>  Fri Mar 06 1970 00:00:00 GMT-0800 (Pacific Standard Time)E
// console.log(person2.dob.getFullYear()); // => 1970
// // =================

// ================= DOM =================
// console.log(window);
// alert(1);
// window.alert(2);

// // Single elment
// const form = document.getElementById('my-form');
// const container = document.querySelector('.container');
// const h1 = document.querySelector('h1');
// console.log(form);
// console.log(container);
// console.log(h1);

// // Mutiple element
// console.log(document.querySelectorAll('.item')); // nodelist => similary to array


// console.log(document.getElementsByClassName('item')); 
// HTML collection => you cannot use an array method => you have to manually change it to array.

// console.log(document.getElementsByTagName('li')); 


// // Iterating multiple element
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// // How to remove and edit the contents
// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello'; // Change the first text by using ".textContent"
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Howdy</h1>';

// // How to change style
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// How to add events
const btn = document.querySelector('.btn');

// // click event
// btn.addEventListener('click', (e) => {
//   e.preventDefault(); // prevent (keep) the event?
//   // console.log(e);
//   // console.log(e.target);
//   // console.log(e.target.className); // => btn
//   // console.log(e.target.id);

//   // Change background color by ".style"
//   document.querySelector('#my-form').style.background = '#ccc';

//   // Add style from style.css by using ".classList.add"
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });

// // hover event
// btn.addEventListener('mouseover', (e) => {
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });

// hover and exit event
btn.addEventListener('mouseout', (e) => {
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});