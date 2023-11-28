// const myArray = ["one", "two", "tree"];
// for (i = 0; i < myArray.length; i++){
//     console.log(myArray[i]+"\n" );
// }

// if we declare the myArray outside of the statement fot ==> the boucle is faster

const myArray = ["one", "two", "tree"];
let l = myArray.length;
for (i = 0; i < l; i++) {
  console.log(myArray[i] + "\n");
}

//best pratique
// const obj = document.getElementById("demo");
// obj.innerHTML = "Hello";


//Possibilté de forcer window au demarage de commencer par analyser le ficher script

// window.onload = function() {
//   const element = document.createElement("script");
//   element.src = "myScript.js";
//   document.body.appendChild(element);
// }


var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "\n";                     
}
console.log(txt)
