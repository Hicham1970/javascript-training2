/*---
# New Features in ECMAScript 2017

This chapter introduces the new features in ECMAScript 2017:

- [JavaScript String padding](https://www.w3schools.com/js/js_2017.asp#mark_padding)
- [JavaScript Object entries()](https://www.w3schools.com/js/js_2017.asp#mark_obj_entries)
- [JavaScript Object values()](https://www.w3schools.com/js/js_2017.asp#mark_obj_values)
- [JavaScript async and await](https://www.w3schools.com/js/js_2017.asp#mark_async)
- JavaScript Object.getOwnPropertyDescriptors
---*/
//JS String padding:
// let str = "Hello";
// console.log(str + " ".repeat(5)); // Hello

// let text = "5";
// text = text.padStart(4, 0);
// console.log(text); //0005

//Objects entries():
// let person = {
//     firstName: "Bob",
//     secondName: "Sto",
//     age: 22,
//     eye_color:"blue"
// }

// let pegs1 = Object.entries(person);
// console.log(pegs1);
/*--- output:
[
  [ 'firstName', 'Bob' ],
  [ 'secondName', 'Sto' ],
  [ 'age', 22 ],
  [ 'eye_color', 'blue' ]
]
---*/

// const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += `{the fruit is : ${fruit} and the value is ${value} + "\n"}`;
// }
// console.log(text);

// const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

// const myMap = new Map(Object.entries(fruits));
// console.log(myMap); // Map(3) { 'Bananas' => 300, 'Oranges' => 200, 'Apples' => 500 }

//Object.value():
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let text = Object.values(person);
console.log(text); 
//[ 'John', 'Doe', 50, 'blue' ]

const kingdoms = {
    England: ["London", "Manchester"],
    France: ["Paris", "Lyon"],
    Spain: ["Madrid", "Barcelona"],
    Morocco:["Rif", "Sahara"]
}
let rivals = Object.values(kingdoms); 
console.log(rivals); 
/*---
[
  [ 'London', 'Manchester' ],
  [ 'Paris', 'Lyon' ],
  [ 'Madrid', 'Barcelona' ],
  [ 'Rif', 'Sahara' ]
]
---*/