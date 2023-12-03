/*--In this example, this refers to the person object.
Because fullName is a method of the person object.
John Doe---*/

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
}
/*---Accessing the 
objects Methods --*/
let name = person.fullName();
console.log(person.fullName); // [Function: fullName]
/**
 * Logs a message to the console with a new ID based on the given age.
 * The ID is constructed by concatenating the age parameter with the id property of the person object.
 *
 * @param {number} age - The age parameter used to construct the new ID.
 * @returns {undefined} - This function does not return a value.
 *
 * @example
 * // Logs the message "my new ID is 305566" to the console
 * myNewId(30);
 */
let myNewId = function (age) {
    console.log(`my new ID is ${age}${person.id}`);
}
myNewId(-222); 
// my new ID is 2225566

// <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Day 0 of <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a>. Today’s the start of my daily <a href="https://twitter.com/WakaTime?ref_src=twsrc%5Etfw">@WakaTime</a> goal, where I’ll be coding 1 hr per day in JavaScript, HTML+EEX, HTML, CSS, Python except saturday <a href="https://twitter.com/hashtag/freeCodeCamp?src=hash&amp;ref_src=twsrc%5Etfw">#freeCodeCamp</a> <a href="https://twitter.com/hashtag/programming?src=hash&amp;ref_src=twsrc%5Etfw">#programming</a> <a href="https://t.co/Z8kQPArKQ1">https://t.co/Z8kQPArKQ1</a> <a href="https://t.co/TlDJFm9W9U">pic.twitter.com/TlDJFm9W9U</a></p>&mdash; hicham G (@alfaorionis) <a href="https://twitter.com/alfaorionis/status/1731445834112528776?ref_src=twsrc%5Etfw">December 3, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>