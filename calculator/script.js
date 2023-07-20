let currentValue = '';
let currentOperation = '';
let previousValue = '';

function clearDisplay() {
  currentValue = '';
  previousValue = '';
  currentOperation = '';
  updateDisplay('');
}

function appendValue(value) {
  if (value === '.' && currentValue.includes('.')) {
    return;
  }
  currentValue += value;
  updateDisplay(currentValue);
}

function performOperation(operation) {
  if (currentValue === '') {
    return;
  }
  if (previousValue !== '') {
    calculateResult();
  }
  currentOperation = operation;
  previousValue = currentValue;
  currentValue = '';
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousValue);
  const curr = parseFloat(currentValue);
  if (isNaN(prev) || isNaN(curr)) {
    return;
  }
  switch (currentOperation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    default:
      return;
  }
  currentValue = result.toString();
  currentOperation = '';
  previousValue = '';
  updateDisplay(currentValue);
}

function updateDisplay(value) {
  document.getElementById('display').value = value;
}
