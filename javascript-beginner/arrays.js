console.log("Hello World!");
const cars = [
  "Audi",
  "BMW",
  "Merzedes",
  "Volvo",
  "Skoda"
];

// C# => ArrayList // Abstraktion eines Arrays => Erstellt neues größeres Array, wenn ArrayList voll ist.
const random = [1, -42, "Hello", true, {name: "Hans"}, [[[]]]];
console.log(random);

// Alternativ
const altCars = new Array("Audi", "BMW");
console.log(altCars);

console.log(cars);
console.log(cars.toString());
console.log(cars.length);

cars.push("Saab");


console.log(cars);
console.log(cars.length);

// cars = ["VW"]; => Kann nicht neu "Zugewiesen" werden, wenn Variable const ist.

cars[0] = "Ford";

console.log(cars);
console.log(cars.length);

let myCar = cars[4];
console.log(myCar);


// Array Methods
const demoElem = document.getElementById('demo');
console.log(demoElem);

// führt implizit die toString() Methode aus.
demoElem.innerHTML = cars//.toString();

// "10" + "10" => "1010"; "Hello " + "World!"


demoElem.innerHTML = cars.join(' *** ');

// Array.push() => neues Element am Ende des Array hinzufügen
cars.push(42);

demoElem.innerHTML = cars;
 
// Array.pop() => letzes Element entfernen und als Rückgabewert liefern
console.log(cars.pop());

demoElem.innerHTML = cars;

let saab = cars.pop();
console.log(saab);

demoElem.innerHTML = cars;

// Array.shift() => erstes Element wird entfernt und zurückgegeben; Die anderen Elemente Rücken auf einen geringeren Index.
cars.shift();

demoElem.innerHTML = cars;

// Array.unshift() => gegenteil von Array.shift()
cars.unshift("Saab");

demoElem.innerHTML = cars;

// Array.splice() => löscht Elemente aus Array von Startposition bis Anzahl Elemente die gelöscht werden sollen.
cars.splice(1,2);
demoElem.innerHTML = cars;

cars.splice(0, 2, "VW", "Lamborghini");
demoElem.innerHTML = cars;

// Array.slice() => Gibt eine Kopie des Arrays zurück, von Startindex bis Endindex -1.
let carsSlice = cars.slice(1,2+1);
let otherSlice = cars.slice(1);
demoElem.innerHTML = cars;
console.log(carsSlice);
console.log(otherSlice);

// JavaScript hat keine Array.max oder Array.min Funktion!

const fruits = ["Banana", "Grapefruit", "Mango", "Apple"];
fruits.sort(); // Wenn kein Parameter gegeben wird, sortiert alphabetisch in Aufsteigender Reihenfolge
console.log(fruits);
fruits.reverse(); // Kehrt Reihenfolge um. Sortiert nicht zwangsläufig nach Anfangsbuchstabe/Höhe einer Zahl.
console.log(fruits);

// Kurzer Exkurs zu Funktionen
function compareNums(param1, param2) {
  return param1 - param2;
}


const numbers = [10, 5, 101, 42, 64, 12, 72];
console.log(numbers);
// numbers.sort(compareNums);
/* in der sort function
  let res = compareNums(10,5); // => 5
*/
//numbers.sort();
numbers.sort((a, b) => a - b);
//numbers.sort(function(a,b) { return a - b })
console.log(numbers);

const carsUnsortedElem = document.getElementById('carsUnsorted');
const carsSortedElem = document.getElementById('carsSorted');

function Cars() {
  this.carsList = [
    {type: "Volvo", year: 2022},
    {type: "Skoda", year: 2018},
    {type: "Audi", year: 2023},
    {type: "VW", year: 2019}
  ];
}

Cars.prototype.toString = function carsToString() {
  let output = "";
  this.carsList.forEach(item => {
    output += `Type: ${item.type}; Year: ${item.year}\n`;
  });
  return output;
}

const carObjects = new Cars();

// const carObjects = [
//   {type: "Volvo", year: 2022},
//   {type: "Skoda", year: 2018},
//   {type: "Audi", year: 2023},
//   {type: "VW", year: 2019}
// ]

carsUnsortedElem.innerHTML = carObjects;

//carObjects.sort((carA, carB) => carA.year - carB.year);

carsSortedElem.innerHTML = carObjects;

console.log(carObjects.toString());