const submitBtn = document.querySelector('[submitBtn]');
const myInput = document.querySelector('[myInput]');
const myTxtArea = document.querySelector('[myTxtArea]');

class Person {
  constructor(name) {
    this.name = name;
  }
}
let p1 = new Person("Alf");

let jsonPerson = JSON.stringify(p1);
let objPerson = JSON.parse(jsonPerson);
console.log(p1);
console.log(jsonPerson);
console.log(objPerson);

localStorage.setItem('myPerson', JSON.stringify(p1));

let storedPerson = JSON.parse(localStorage.getItem('myPerson'));
console.log("Hat funktioniert!");
console.log(storedPerson);


submitBtn.addEventListener('click', () => {
  const mySavedText = myInput.value;
  localStorage.setItem('myText', mySavedText);
  myTxtArea.value = localStorage.getItem('myText');
});

myTxtArea.value = localStorage.getItem('myText');