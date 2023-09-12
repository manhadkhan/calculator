/*Functions for basic operations like 
addition, substraction, multiplication, and division*/
function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b == 0) {
        return "∞";
    }
    else {
        return a / b;
    }
}

// A function to call one of the above function for operation
function operate(operator, num1, num2) {
    if(operator === '+') {
        return add(num1, num2);
    }
    else if(operator === '-') {
        return substract(num1, num2);
    }
    else if(operator === '*') {
        return multiply(num1, num2);
    }
    else if(operator === '/') {
        return divide(num1, num2);
    }
    else {
        return "Invalid operator";
    }
}

// get the buttons
const buttons = document.querySelectorAll('.btn-number, .btn-operator')
const display = document.querySelector('.display')

// adding a pop-up message when a button is clicked
buttons.forEach(button => {
  button.addEventListener('click', () => { 
      // logic that run when the button is "clicked"
      const buttonValue = button.getAttribute('data-num');
      alert(buttonValue + " was clicked")
  })
})