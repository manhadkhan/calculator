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

//A function to call one of the above function for operation
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

//Get the buttons
const buttons = document.querySelectorAll('.btn-number, .btn-operator')
const display = document.querySelector('.display')
const equalsButton = document.querySelector('.btn-equals');
const clearButton = document.querySelector('.btn-clear');

let displayData = "";

// adding a pop-up message when a button is clicked
buttons.forEach(button => {
  button.addEventListener('click', () => { 
      // logic that run when the button is "clicked"
      const buttonValue = button.getAttribute('data-num');

      //update the display with the value of the button clicked
      displayData += buttonValue;
      display.textContent = displayData;
    })
})

//clear the display
clearButton.addEventListener('click', () => {
    displayData = ""; //when the clear button is clicked, display data value will be set to an empty string.
    display.textContent = displayData; //assigning displayData value to display
})

// Initialize variables to store the current number, operator, and the accumulated result
let currentNumber = "";
let currentOperator = "";
let accumulatedResult = null;

// Function to update the display
function updateDisplay() {
    display.textContent = currentNumber !== "" ? currentNumber : accumulatedResult !== null ? accumulatedResult : "0";
}

// Event listener for the equals button
equalsButton.addEventListener('click', () => {
    if (currentOperator && currentNumber) {
        const num1 = parseFloat(currentNumber);
        if (accumulatedResult === null) {
            accumulatedResult = num1;
        } else {
            accumulatedResult = operate(currentOperator, accumulatedResult, num1);
        }
        currentNumber = "";
        currentOperator = "";
        updateDisplay();
    }
});

// Event listener for operators
document.querySelectorAll('.btn-operator').forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        if (currentNumber) {
            if (accumulatedResult === null) {
                accumulatedResult = parseFloat(currentNumber);
            } else {
                const num1 = parseFloat(currentNumber);
                accumulatedResult = operate(currentOperator, accumulatedResult, num1);
            }
            currentOperator = operatorBtn.getAttribute('data-num');
            currentNumber = "";
            updateDisplay();
        }
    });
});

// Event listener for numbers
document.querySelectorAll('.btn-number').forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        const number = numberBtn.getAttribute('data-num');
        currentNumber += number;
        updateDisplay();
    });
});

// Clear the display and reset variables
clearButton.addEventListener('click', () => {
    currentNumber = "";
    currentOperator = "";
    accumulatedResult = null;
    updateDisplay();
});
    