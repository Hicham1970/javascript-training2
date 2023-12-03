/*----
New Features in ES2019
String.trimStart()
String.trimEnd()
Object.fromEntries
Optional catch binding
Array.flat()
Array.flatMap()
Revised Array.Sort()
Revised JSON.stringify()
Separator symbols allowed in string litterals
Revised Function.toString()
-----*/
// .trimStart():

// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
// console.log(text2); // Output: "Hello World!"

// let text1 = "     Hello World!     ";
// let text2 = text1.trimEnd();
// // console.log(text2); // Output: "     Hello World!"

// const fruits = [
//   ["apples", 300],
//   ["pears", 900],
//   ["bananas", 500],
// ];

// const myNewF = fruits.flat();
// console.log(myNewF); // Output: ['apples', 300, 'pears', 900, '

// const myObj = Object.fromEntries(fruits);
// console.log(myObj); //{ apples: 300, pears: 900, bananas: 500 }


// Optional catch Binding
// From ES2019 you can omit the catch parameter if you don't need it:.
// before 2019/
//

/*---
JavaScript Array flat()
ES2019 added the Array flat() method to JavaScript.

The flat() method creates a new array by flattening a nested array.---*/
// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const newArr = myArr.flat();
// console.log(newArr);
// //[ 1, 2, 3, 4, 5, 6 ]


/*----Stable Array sort()
ES2019 revised the Array sort() method.

Before 2019, the specification allowed unstable sorting algorithms such as QuickSort.

After ES2019, browsers must use a stable sorting algorithm:

When sorting elements on a value, the elements must keep their relative position to other elements with the same value.---*/
// const myArr = [
//   { name: "X00", price: 100 },
//   { name: "X01", price: 100 },
//   { name: "X03", price: 100 },
//   { name: "X02", price: 100 },
//   { name: "X07", price: 110 },
//   { name: "X04", price: 110 },
//   { name: "X06", price: 110 },
//   { name: "X05", price: 110 },
// ];
// console.log(myArr);


// let text = JSON.stringify("\u26D4");
// let tt = JSON.parse(text);
// console.log(tt);//⛔
// console.log(text);//"⛔"

// // This is valid in ES2019:
// let text = "\u2028";
// console.log(text);//U+2028