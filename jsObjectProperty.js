// the for..in Loop is used to each the object properties
// Syntax:
// for (let variable in object) {
// code to be executed
// }

// const person = {
//   fname: " John",
//   lname: " Doe",
//   age: 25,
// };
// person.nationality = "Moroccan";
// console.log(person);

// let txt = ""
// for (let x in person) {
//   txt += person[x] + " ";
// }
// console.log(txt);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// delete person.eyeColor;
// console.log(person.firstName + " " + person.lastName + " " + person.age);

// Nested Objects:
// myObj = {
//   name: "John",
//   age: 30,
//   cars: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Fiat",
//   },
// };
// console.log(myObj.cars.car2);

// console.log(myObj.cars.car2);
// console.log(myObj.cars["car2"]);
// console.log(myObj["cars"]["car2"]);

// let p1 = "cars";
// let p2 = "car3";
// console.log(myObj[p1][p2]);

//
// Nested Arrays and Objects
// Values in objects can be arrays, and values in arrays can be objects:
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };
// // Here to get the second model of the second car of myObj cars:
// console.log(myObj.cars[1].models[1]);

// Looping through a nested object:
// let x = "";
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };

// for (let i in myObj.cars) {
//   x += myObj.cars[i].name + "\n";
//   for (let j in myObj.cars[i].models) {
//     x += " " + myObj.cars[i].models[j] + "\n";
//   }
// }
// console.log(x);

let x = "";
const ship = {
  name: "Venus",
  flag: "Spain",
  imo: 9387276,
  class: "Apostle",
  sister_Ship: [
    { name: "Mars", LBP: ["Gogo", "Casa", "Mim"], Beam: 15 },
    { name: "Jupiter", LBP: ["Congo", "Chili", "USA"], Beam: 18 },
    { name: "Uranus", LBP: ["Gaza", "India", "UAE"], Beam: 25 },
  ],
};


for (let i in ship.sister_Ship) {
  x += ship.sister_Ship[i].name + "\n";
  for (let j in ship.sister_Ship[i].LBP) {
    x += " " + ship.sister_Ship[i].LBP[j] + "\n";
  }
}
console.log(x);
