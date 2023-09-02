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