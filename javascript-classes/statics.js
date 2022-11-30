class Car {
  static numberCars = 0;

  constructor(make) {
    this.make = make;
    Car.numberCars += 1;
  }

  static beginRace() {
    console.log("The Race has started!");
  }

  static isEqual(x, y) {
    return x.make == y.make;
  }
}
/** STACK
 * car1 => 0x00001
 * car4 => 0x00004
 * car1_1 => 0x00001
 */
/** HEAP
 * 0x00001 => {make: "Audi"}
 * 0x00004 => {make: "Audi"}
 */

let car1 = new Car("Audi"); // new => Konstruktor => Neues Objekt
// => cars1 => 0x00001
let car1_1 = car1;
let car2 = new Car("1024");
let car3 = new Car(1024);
let car4 = new Car("Audi"); // new => Konstruktor => Neues Objekt
// => cars2 => 0x00004
//console.log(car1);
//console.log(car2);
// console.log(car1.numberCars); // => undefined
//console.log(Car.numberCars);
// car1.beginRace(); // => TypeError: car1.beginRace is not a function
Car.beginRace();
console.log(car1);
console.log(car4);

// *******************
// console.log((0x00001 === 0x00004))
console.log("isEqual: " + (car1 == car4)); // false
console.log("isStrictlyEqual: " + (car1 === car4)); // false
console.log("isEqual (RefCopy): " + (car1 == car1_1)); // true
console.log("isStrictlyEqual (RefCopy): " + (car1 === car1_1)); // true

// Ist der Wert/Werte der Instanzen gleich?
console.log(Car.isEqual(car1, car4)); // true
console.log(Car.isEqual(car2, car3)); // true

let varA = 10;
let varB = "10";
console.log(varA == varB);
console.log(varA === varB);