// let x = 999999999999999;
// let y = 999999999999999n;
// console.log(x);
// console.log(typeof y);
//Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
//To create a BigInt, append n to the end of an integer or call BigInt():

// let v = BigInt(999999999999999);
// let type = typeof v;
// console.log("Type: " + type); // Outputs Type: bigint

/*---

JavaScript String matchAll()
Before ES2020 there was no string method that could be used to search for all occurrences of a string in a string.
---*/
// let text = "I love too much the cats, and i hate Dogs and Mouses!!";
// const iterator = text.matchAll("Cats");
// console.log(typeof(iterator[0]));
// const iterator = text.matchAll(/cats/gi);

// for (let mach of iterator) {
//   console.log(`Found ${mach[0]}`);
// }
//If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.
//If you want to search case insensitive, the insensitive flag (i) must be set:

/*-----
The Nullish Coalescing Operator (??)
The ?? operator returns the first argument if it is not nullish (null or undefined).
Otherwise it returns the second.----*/
// let declaration = null;
// console.log(typeof (declaration));
// let text = "missing";
// let result = declaration ?? text;
// console.log(`The declaration is : ${result}`);

/*---
The Optional Chaining Operator (?.)
The Optional Chaining Operator returns undefined if an object is undefined or null (instead of throwing an error).----*/
// const car = { type: "Fiat", model: "500", color: "white" };
// let name = car?.name; // undefined
// // let name = car?.model; // 500
// console.log(name);

// let x = 10;
// x &&= 5;
// console.log("The value of x is " + x);

// const obj = {
//     name: 'John',
//     age: 30,
// }
// obj.age += 2;
// console.log('After incrementing by two years, John is now ' + obj.age + ' years old.');

/*----
The ||= Operator
The Logical OR Assignment Operator is used between two values.

If the first value is false, the second value is assigned.---*/
// let x = undefined;
// let x = " ";
// x ||= 5;
// console.log("The value of x is :" + x);

/*---
The ??= Operator
The Nullish Coalescing Assignment Operator is used between two values.

If the first value is undefined or null, the second value is assigned.---*/
let x;
x ??= 5;
console.log(x); 