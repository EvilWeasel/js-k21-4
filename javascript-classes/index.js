class Car {
  /**
   * Maximal 1 Konstruktor pro Klasse.
   * Wird automatisch ausgeführt, sobald instanz erstellt wird.
   * Initialisiert Object Properties der Instanz */
  constructor(make, year) {
    this.make = make;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
  ageFrom(currentYear) {
    return currentYear - this.year;
  }
  get getMake() {
    return this.make;
  }
  set setMake(x) {
    this.make = x;
  }
}

let myCar = new Car("Ford", 2018);
let someonesCar = new Car("Skoda", 2016);

console.log(myCar);
console.log(someonesCar);

console.log(myCar.age());

console.log(someonesCar.ageFrom("2024"));

console.log(myCar.getMake);

myCar.setMake = "Audi";

console.log(myCar.getMake);