let speech = "In my life i always loved Cats and Dogs but Lions have another place in my heart" 
speech = speech.replaceAll("Lions", "Crocodiles"); 
console.log(speech);
// it works only with strings and not with Arrays.
// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

// let arr = [1, 2, 3];
// arr.push(4); // this will add the number 4 at the end of array

/*--
JavaScript Array at()
ES2022 introduced the array method at():---*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit);


// const name = "W3Schools";
// let letter = name.at(2);
// console.log(`The third character is ${letter}`);

// const name = "W3Schools";
// let letter = name[2];
// console.log(`The third character is ${letter}`);

// let person = "John Doe";

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// const person = {};
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// let fullname = `${person.firstName} ${person.lastName}`;
// console.log(fullname);


// const person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// let fullName = `${person.firstName} ${person.lastName}`;
// // console.log(fullName);
// // console.log(person)

// const x = person;  // Will not create a copy of person.
// x.age = 10;
// console.log(x);
// console.log(person.age);

// // JS Object Properties
// objectName.property      // person.age person.firstName
// objectName["property"]    // person["age"] person["firstName"]
// objectName[expression]    // x = ["age"], person[x]