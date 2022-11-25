let username = "Tobias Wehrle";
username = 24;
const alter = 24;
//var x = 10;

console.log(username, alter);


// Das Keyword "var" hat function-scope => ist gültig in der gesamten funktion.
/* var x = 1;
let y = "def";
console.log(x);

if (x === 1) {
  var x = 2;
  let test = "abc";
  console.log(x);
}
console.log(test);
console.log(x) */;

// Ich bin ein ein-zeilen comment // strg+shift+p
const oma = 24;
/*
  Ich bin ein multi-line-comment ^^

  lorem ipsum

  undso...
*/
  
// Beispiel für Block-Scope
let a = "Buxtehude";
{
  let a = 10;
  let erg = a * 2;
  console.log(erg);
}



console.log(window.location)

// Variablen in JavaScript haben keinen festen Typen
let foo = 42;
console.log(foo);
foo = "bar";
console.log(foo);

// if (true) {
//   let window = "true";
//   console.log(window)
// }

// console.log(window);

let myBoolean = true;
// Python Boolean => myBoolean = True | False
myBoolean = false;
// myBoolean = "ABC";

let myNumber = 42;
myNumber = 42.1337;
myNumber = -31;
myNumber = 999999999.987
console.log(myNumber)
let maxInt = Number.MAX_SAFE_INTEGER / 1.3;
console.log(maxInt);

let myBigInt = Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER;
let myOtherBigint = 11n;
// C# => var x = 42.42f;
console.log(myBigInt);

let myString = "Hello World!";
myString = 'Abc'; // Strings sind immutable!
myString = 'Und ich sage: "Feierabend"';
let myIntString = `Hallo, mein name ist ${username}`;
console.log(myString);
console.log(myIntString);

let myNull = null;
console.log(myNull);
// string myString;

let myUndefined = undefined;
//console.log(xyz);

let myObj = {};
// myObj = Object;
// JavaScript Object Syntax
let myPerson = {
  name: "John",
  age: 42
}
// JSON Syntax
let myPersonJson = {
  "name": "John",
  "age": 42
}
myPerson.age += 1;
console.log(myObj);
console.log(myPerson);
console.log(myPerson.age);