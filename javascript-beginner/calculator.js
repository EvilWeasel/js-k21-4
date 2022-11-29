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
    this.clear();
  }

  // clear
  clear() {
    // this.result = false;
    this.previousOperand = '';
    this.currentOperand = '0';
    this.updateDisplay();
  }

  // delete

  // append number
  appendNumber(number) {
    // if (this.result) this.clear();
    if (number === '.' && this.currentOperand.includes('.')) return;
    if (this.currentOperand[0] === '0' &&
    number !== '.' &&
    !this.currentOperand.includes('.')) {
      this.currentOperand = number;
    } else {
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    this.updateDisplay();
    // array.push()
  }

  // choose operation
  chooseOperation(operation) {
    // this.result = false;
    this.operation = operation;
    this.previousOperand = `${this.currentOperand} ${this.operation}`;
    this.currentOperand = '0';
    this.updateDisplay();
  }

  // calculate
  // watch whitespace
  calculate() {
    let result;
    const previous = parseFloat(this.previousOperand.slice(0, -2));
    const current = parseFloat(this.currentOperand);
    switch (this.operation) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case '*':
        result = previous * current;
        break;
      case '/':
        result = previous / current;
        break;
      default: return;
    }
    this.currentOperand = result;
    //this.result = true;
    this.updateDisplay();
  }

  // update display
  updateDisplay() {
    this.currentOperandElem.innerText = this.currentOperand;
    this.previousOperandElem.innerText = this.previousOperand;
  }
}


const calculator = new Calculator(previousOperandElem, currentOperandElem);

equalsButton.addEventListener('click', () => {
  calculator.calculate();
});


clearButton.addEventListener('click', () => {
  calculator.clear();
});

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
  });
});