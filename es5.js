/*--
"use strict"
String[number] access
Multiline strings
String.trim()
Array.isArray()
Array forEach()
Array map()
Array filter()
Array reduce()
Array reduceRight()
Array every()
Array some()
Array indexOf()
Array lastIndexOf()
JSON.parse()
JSON.stringify()
Date.now()
Date toISOString()
Date toJSON()
Property getters and setters
Reserved words as property names
Object methods
Object defineProperty()
Function bind()
Trailing commas-*/

//   var fruits = ["Banana", "Orange", "Apple", "Mango"];
//   var x = "";
//   x = Array.isArray(fruits);
// console.log(x)
/*----------------------------------------------*/
// var txt = "";
// var numbers = [45, 4, 9, 16, 25];
// numbers.forEach(myFunction);

// function myFunction(value) {
//   txt = txt + value + "\n";
// }
// console.log(txt);

/*------------------------------------------*/

// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);

// function myFunction(value) {
//   return value * 2;
// }
// console.log(numbers2);

/*--------------------------------------------*/
// var numbers = [45, 4, 9, 16, 25];
// var over18 = numbers.filter(myFunction);

// function myFunction(value) {
//   return value > 18;
// }
// console.log(over18);
/*--------------------------------------------*/
// var numbers1 = [45, 4, 9, 16, 25];
// var sum = numbers1.reduce(myFunction);

// function myFunction(total, value) {
//   return total + value;
// }
// console.log(sum);
/*--------------------------------------------*/
// var numbers1 = [45, 4, 9, 16, 25];
// var sum = numbers1.reduceRight(myFunction);

// function myFunction(total, value) {
//   return total + value;
// }
// console.log(sum);
/*-----------------------------------*/
// var numbers = [45, 4, 9, 16, 25];
// var allOver18 = numbers.every(myFunction);

// function myFunction(value) {
//   return value > 18;
// }
// console.log(allOver18);  //false
/*-----------------------------------*/
// var numbers = [45, 4, 9, 16, 25];
// var allOver18 = numbers.some(myFunction);

// function myFunction(value) {
//   return value > 18;
// }
// console.log(allOver18);  //true
/*-----------------------------------*/
// var fruits = ["Apple", "Orange", "Apple", "Mango"];
// var a = fruits.indexOf("Apple");
// console.log(a);

/*-------------*/
// var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
// console.log(obj);

// var jsObject = { name: "John", age: 30, city: "New York" };
// var jsonString = JSON.stringify(jsObject);
// console.log(jsonString);
/*------------------------*/
// var timeInMs = Date.now();
// console.log(timeInMs);
//Date.now() returns the same as getTime() performed on a Date object.
// /*----------*/
// const d = new Date();
// var timeIso = d.toISOString();

// var timeJson = d.toJSON();
// console.log(timeJson);
// console.log(timeIso);
// console.log(d.getTime());

/*-------------------------*/

// Property Getters and Setters
// ES5 lets you define object methods with a syntax that looks like getting or setting a property.
// This example creates a getter for a property called fullName:
// // Create an object:
// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// // Display data from the object using a getter:
// var newPerson = person.fullName;
// console.log(newPerson);

// var person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "NO",
//   get lang() {
//     return this.language;
//   },
//   set lang(value) {
//     this.language = value;
//   },
// };

// // Set an object property using a setter:
// person.lang = "en";

// // Display data from the object using a getter:
// let newLanguage = person.lang;
// console.log("New Person Language is ", newLanguage);

/*-------------------------------*/
// // Create an Object:
// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   language : "NO",
// };

// // Change a Property:
// Object.defineProperty(person, "language", {
//   value: "EN",
//   writable : true,
//   enumerable : false,
//   configurable : true
// });

// // Enumerate Properties
// var txt = "";
// for (var x in person) {
//   txt += person[x] + "\n";
// }
// console.log(txt);

// Create an Object:
// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   language : "NO"
// };

// // Change a Property:
// Object.defineProperty(person, "language", {
//   get : function() { return language },
//   set : function(value) { language = value.toUpperCase()}
// });

// // Change Language
// person.language = "en";

// // Display Language
// var languageUpperCase = person.language;
// console.log(languageUpperCase);//EN

/*------------------------------------------*/
// Function Bind()
// With the bind() method, an object can borrow a method from another object.
// This example creates 2 objects (person and member).
// The member object borrows the fullname method from the person object:
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function() {
//         return `My fullName is : ${this.firstName}  ${this.lastName}`;
//     }
// };

// const member = {
//     firstName: 'Jane',
//     lastName: 'Smith',
// };
// member.fullName = person.fullName.bind(member);
// console.log(`${member.fullName()}`);

// //When i change the function to an Arrow function , it will be no binding

/*----------------------------*/
//Trailing commas:
// // Example with objects

// person = {
//   firstName: "John",
//   lastName: " Doe",
//   age: 46,
// // };

// // Example Array:
// points = [1, 5, 10, 25, 40, 100];

// //JSON Object:
// // Allowed:
// const person = '{ "firstName":"Kama", "lastName":"Bob", "age":22}';
// console.log(JSON.parse(person));

// //Not Allowed:because i add i comma after 99
// const been = '{ "firstName":"Lom", "lastName":"Vlad", "age":99,}';
// console.log(JSON.parse(been));

// Array :
// Allowed:
points = [40, 100, 1, 5, 25, 10];

// Not allowed:
points = [40, 100, 1, 5, 25, 10];
