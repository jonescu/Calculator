const displayText = document.querySelector('.display')
const numberBtns = Array.from(document.querySelectorAll('.number'))
const operands = document.querySelectorAll('.operand')
const clearBtn = document.querySelector('.clear-btn')
const computeBtn = document.querySelector('.equals-btn')
let firstOperand = ''
let secondOperand = ''

function clear() {
    displayText.textContent = ''
}

clearBtn.addEventListener('click', clear);

numberBtns.forEach(button => {
    button.addEventListener('click', function() {
        appendNumber(button.textContent);
    })
});

operands.forEach(operand => {
    operand.addEventListener('click', function() {

    })
});

function appendNumber(number) {
    displayText.textContent += number
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operand, a, b) {

    switch(operand) {
        case "+": 
        return add(a, b)
        case "-": 
        return subtract(a,b)
        case "*":
        return multiply(a,b)
        case "/":
        return divide(a,b)
        default: 
        return null;
    }
}

