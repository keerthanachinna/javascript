// Get the result input element
const resultInput = document.getElementById('result');

// Function to append a number or operator to the result
function appendNumberOrOperator(value) {
  resultInput.value += value;
}

// Function to append a number to the result
function appendNumber(number) {
  appendNumberOrOperator(number);
}

// Function to append an operator to the result
function appendOperator(operator) {
  appendNumberOrOperator(operator);
}

// Function to calculate the result
function calculate() {
  try {
    const result = eval(resultInput.value);
    resultInput.value = result;
  } catch (error) {
    resultInput.value = 'Error';
  }
}

// Function to clear the calculator
function clearCalculator() {
  resultInput.value = '';
}
