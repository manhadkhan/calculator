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