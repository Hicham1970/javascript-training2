/*----New Features in ECMAScript 2016
This chapter introduces the new features in ECMAScript 2016:

JavaScript Exponentiation (**)
JavaScript Exponentiation assignment (**=)
JavaScript Array includes()
----*/

//JavaScript Exponentiation (**)

let x = 2;
let z = x ** 2;
console.log(z);

let y = Math.pow(x, 2);
console.log(y);

// JavaScript Exponentiation assignment (**=)

// let a = 2;
// a **= 3; // a is now 8
// console.log(a)

/*-----------------------*/

// JavaScript Array includes()
// ECMAScript 2016 introduced Array.includes to arrays.
// This allows us to check if an element is present in an array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.includes("Mango"));