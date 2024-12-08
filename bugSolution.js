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
  try {
    switch (operator) {
      case '+': return add(a, b);
      case '-': return subtract(a, b);
      case '*': return multiply(a, b);
      case '/': return divide(a, b);
      default: throw new Error('Invalid operator');
    }
  } catch (error) {
    console.error('Error:', error.message);
    return null; // Or handle the error in another way
  }
}

console.log(operate('+', 10, 5)); // 15
console.log(operate('-', 10, 5)); // 5
console.log(operate('*', 10, 5)); // 50
console.log(operate('/', 10, 0)); // Error: Cannot divide by zero
console.log(operate('/', 10, 2)); //5