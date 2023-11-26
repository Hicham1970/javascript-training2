const muArray = ["firstName", "lastName", "age", "gender"];
muArray.push("address");
muArray.push("city");
muArray.push("state");
muArray.push("zip");
console.log(muArray);
document.getElementById("demo").innerHTML = muArray;
console.log(typeof muArray);

let muObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  gender: "Male",
  address: "123 Main St",
  city: "Casablanca",
  state: "CA",
  zip: "90210",
};
console.log(muObject);
console.log(typeof muObject);
let muString = JSON.stringify(muObject);
console.log(muString);
console.log(typeof muString);
let muObject2 = JSON.parse(muString);
console.log(muObject2);
console.log(typeof muObject2);


firstName = "John";
lastName = "Doe";

price = 19.9;
tax = 0.2;

fullPrice = price + price * tax;

const cars = ["Volvo", "Saab", "Fiat"];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
