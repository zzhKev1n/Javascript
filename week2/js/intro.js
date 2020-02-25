"use strict";

//  single-line comment

/*
    multi-line comment
    block comment
*/

// console.log("log");
// console.error("error");
// console.warn("warn");
// console.info("info");
// console.debug("debug");


// alert(123);

console.log("Secret message...");

// loosely-typed language - JS decides the variable's data type based on the value assigned
var firstName = "Kevin";
let subTotal = 500;
const gst = 0.15;

document.write("<p>Hello...</p>");
document.write(`<p>Hello...</p>`);  //newer JS isnt supported in older browsers (use Babel JS)

// use getElemntById and innerHTML
// get reference to the output area
document.getElementById("demo").innerHTML = "12334";
// document.getElementById("output").innerHTML = "12334";
const output = document.getElementById("output");
output.innerHTML="asdf";
output.innerHTML="test";
output.innerHTML += " 1234513";

// getting inputs from users
let userName = prompt("Gimme your first name!") + " ";
let surName = prompt("Gimme your last name!");
console.log(userName +  surName)

// write content to output area (append to existing ocntent)
output.innerHTML += "<p>Now I've got your name, " + userName + surName + "</p>";

// write content using ES2015 template literals (variables inside a string)
output.innerHTML += `<p>Now I've got your name, ${userName} ${surName}!</p>`;
