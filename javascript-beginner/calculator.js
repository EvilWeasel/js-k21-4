/* 
  document.querySelector => Gibt ein Element zurück, das das angegebene Attribut enthält, oder Null, wenn nicht gefunden.
*/
const previousOperandElem = document.querySelector('[data-previous-operand]');
const currentOperandElem = document.querySelector('[data-current-operand]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');

/* 
  document.querySelectorAll => Gibt alle Elemente zurück, die das angegebene Attribut enthalten, oder Null, wenn nichts gefunden.
*/
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');

class Calculator {
  /**
   * this.previousOperand
   * this.currentOperand
   * this.operation
   */
  constructor(previousOperandElem, currentOperandElem) {
    this.previousOperandElem = previousOperandElem;
    this.currentOperandElem = currentOperandElem;
  }

  // clear
  clear() {
    this.previousOperand = '';
    this.currentOperand = '0';
    this.updateDisplay();
  }

  // delete

  // append number

  // choose operation

  // calculate

  // update display
  updateDisplay() {
    this.currentOperandElem.innerText = this.currentOperand;
    this.previousOperandElem.innerText = this.previousOperand;
  }
}


const calculator = new Calculator(previousOperandElem, currentOperandElem);


clearButton.addEventListener('click', () => {
  calculator.clear();
});