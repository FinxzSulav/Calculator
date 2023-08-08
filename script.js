let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('result').value = currentInput;
}

function appendOperator(operator) {
  if (currentOperator === '' && currentInput !== '') {
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
  }
}

function clearResult() {
  currentInput = '';
  currentOperator = '';
  previousInput = '';
  document.getElementById('result').value = '';
}

function calculate() {
  if (currentOperator !== '' && currentInput !== '') {
    let result;
    switch (currentOperator) {
      case '+':
        result = parseFloat(previousInput) + parseFloat(currentInput);
        break;
      case '-':
        result = parseFloat(previousInput) - parseFloat(currentInput);
        break;
      case '*':
        result = parseFloat(previousInput) * parseFloat(currentInput);
        break;
      case '/':
        result = parseFloat(previousInput) / parseFloat(currentInput);
        break;
    }
    document.getElementById('result').value = result;
    currentInput = result.toString();
    currentOperator = '';
    previousInput = '';
  }
}
