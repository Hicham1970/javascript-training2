/*---New Features in ECMAScript 2017
This chapter introduces the new features in ECMAScript 2017:

JavaScript String padding
JavaScript Object entries()
JavaScript Object values()
JavaScript async and await
JavaScript Object.getOwnPropertyDescriptors---*/

// let text = "5";
// text = text.padStart(4, 0);
// console.log(text); // 0005
// console.log(typeof(text)); // 0005

// let text = "5";
// text = text.padEnd(4, 0);
// console.log(text); // 5000

/*-----------------------*/
// Objects entries() Method:

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// let text = Object.entries(person);
// console.log(text);
//Object.entries() makes it simple to use objects in loops:

// const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += fruit + ": " + value + "\n";
// }
// console.log(text);

// //Object.entries() also makes it simple to convert objects to maps:
// const fruits = {Bananas:300, Oranges:200, Apples:500};
// const myMap = new Map(Object.entries(fruits));

// /*------------------------*/
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// let text = Object.values(person);
// console.log(text); //[ 'John', 'Doe', 50, 'blue' ]