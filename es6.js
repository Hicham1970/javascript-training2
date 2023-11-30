//New features in ES6:
/*---The let keyword
The const keyword
Arrow Functions
The ... Operator
For/of
Map Objects
Set Objects
Classes
Promises
Symbol
Default Parameters
Function Rest Parameter
String.includes()
String.startsWith()
String.endsWith()
Array.from()
Array keys()
Array find()
Array findIndex()
New Math Methods
New Number Properties
New Number Methods
New Global Methods
Object entries
JavaScript Modules---*/

// let :
// var x = 10;
// // Here x is 10
// {
//   let x = 2;
//   // Here x is 2
// }
// // Here x is 10

// //const:
// var x = 10;
// // Here x is 10
// {
//   const x = 2;
//   // Here x is 2
// }
// // Here x is 10
// Arrow Function:
// var add = (x, y) => x + y;
// console.log(add(3,4));
// const x = (x, y) => {
//   return x * y;
// };
// console.log(x(2, 4));

// Spread operator ... Opérateur de propagation


/*------------------------*/
// // for loop across an Array:
// const cars = ["BMW", "Volvo", "Mini"];
// let parc = "";

// for (let car of cars) {
//   parc += car + " ";
// }
// console.log(parc);
// across a string:
// let language = "JavaScript";
// let text = "";

// for (let x of language) {
//   text += x + " ";
// }
// console.log(text)

/*-----------------------------------*/

// // The symbol type:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// let id = Symbol('id');
// person[id] = 140353;
// // console.log(`${person.firstName} ${person.lastName}`);
// console.log(person);
// // Now person[id] = 140353
// // but person.id is still undefined

/*---------------------------------*/
// // Default parameter
// function myFunction(x, y = 10) {
//   // y is 10 if not passed or undefined
//   return x + y;
// }
// console.log(myFunction(5)); // will return 15

/*--------------------*/
// // function Rest parameter: permet a une fonction de fonctionner avec plusieurs arguments
// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);

/*----------------*/

// let text = "Hello world, welcome to the universe.";
// text.includes("world")    // Returns true

// let text = "Hello world, welcome to the universe.";
// text.startsWith("Hello")   // Returns true

// var text = "John Doe";
// text.endsWith("Doe")    // Returns true

// Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]
/*-----------KEYS()----------*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// let text = "";
// for (let x of keys) {
//   text += x + "\n";
// }
// console.log(text); //0 1 2 3

/*-----Find()--------*/
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(first);
// // /*------Every()-------*/
// const numbers = [4, 9, 16, 25, 29];
// let every = numbers.every(myFunction);
// function myFunction(value, index, array) {
//   return value < 30;
// }
//   console.log(every);
/*-------------------------*/

// console.log(Number.isSafeInteger(10));    // returns true
// console.log(Number.isSafeInteger(12345678901234567890));
// // ::Safe integers are all integers from -(253 - 1) to +(253 - 1).
// // This is safe: 9007199254740991. This is not safe: 9007199254740992.

/*----------------*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}