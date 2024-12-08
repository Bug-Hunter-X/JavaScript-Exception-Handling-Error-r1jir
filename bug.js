function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default: throw new Error('Invalid operator');
  }
}

console.log(operate('+', 10, 5)); //15
console.log(operate('-', 10, 5)); //5
console.log(operate('*', 10, 5)); //50
console.log(operate('/', 10, 0)); //Error: Cannot divide by zero