/**
 * Students
 * Teachers
 * 
 * Sammlung => Students & Teachers
 * C#=> List<Person> p_list = new List<Person>()
 * p_list.append(students1)
 * p_list.append(teacher1)
 * students1.greet();
 * teacher1.greet();
 */

/**
 * classes => PascalCase => MyPersonClass
 * methods/functions/properties => myPersonalGreetFunction
 * const/env's => CURRENT_WORKING_DIR
 */

/* let myList = new Array(
  {name: "Alfred", age: 24, grade: 2},
  {name: "Jens", age: 42, employeeId: 1}
);
console.log(myList); */

let person = new Person("Willy", 33);
console.log(person);

// Parent Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.occupation = 'unemployed';
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm currently ${this.age} old.`);
  }
}

// Child Class
class Student extends Person {
  #grade;
  constructor(name, age, grade) {
    super(name, age);
    this.#grade = grade;
    this.occupation = 'Student'; // Überschreiben von Eigenschaften NACH Aufruf des Parent-Konstruktors
  }
  greet() {
    console.log(`Hello, I'm a student and my name is ${this.name}. My current grade is ${this.#grade}.`);
  }
  set grade(x) {
    this.#grade = x;
  }
  get grade() {
    return this.#grade;
  }
}

class Teacher extends Person {
  constructor(name, age, employeeId) {
    super(name, age);
    this.employeeId = employeeId;
    this.occupation = 'Teacher';
  }
  #callByFirstName() {
    console.log(`Hello, my name is ${this.name}.`);
  }
  greet() {
    this.#callByFirstName();
  }
}

let student1 = new Student("Jack", 32, 3);
student1.greet();
// console.log(student1.grade);
student1.grade = 1;
console.log(student1.grade);
console.log(student1);

let teacher1 = new Teacher("Alice", 28, 1);
teacher1.greet();
// teacher1.#callByFirstName();
// console.log(teacher1.employeeId);
console.log(teacher1);

/* let myString = "abc";
let myNumer = 123;
console.log(myString);
console.log(myNumer);
console.log("abc");*/
