    // declare variables
let displayText = document.querySelector('.main-display')
const numberBtns = Array.from(document.querySelectorAll('.number'))
const operands = document.querySelectorAll('.operand')
const clearBtn = document.querySelector('.clear-btn')
const computeBtn = document.querySelector('.equals-btn')
let currentOperator = document.querySelector('.current-operator')
let firstOperand = document.querySelector('.first-operand')
let operator = ''

displayText.textContent = '0'

    // clear display
function clear() {
    displayText.textContent = ''
    firstOperand.textContent = ''
    currentOperator.textContent = ''
}

clearBtn.addEventListener('click', clear);

    // add functionality to buttons
numberBtns.forEach(button => {
    button.addEventListener('click', function() {
        if(displayText.textContent == '0') {
            clear();
        }
        append(button.textContent)
    })
});

operands.forEach(operand => {
    operand.addEventListener('click', function() {
        currentOperator.textContent = operand.textContent
        operator = ''

        if(firstOperand.textContent == '') {
         firstOperand.textContent += displayText.textContent;
         displayText.textContent = ''
        }   
        
        if(displayText.textContent != '') {
            operate(currentOperator.textContent, firstOperand.textContent, displayText.textContent)
            displayText.textContent = operator
        } 
    })
});

function check() {
    operate(currentOperator.textContent, firstOperand.textContent, displayText)
}

    // make the equals button work
computeBtn.addEventListener('click', function() {
    operate(currentOperator.textContent, firstOperand.textContent, displayText.textContent)
    firstOperand.textContent = ''
})

    // concatenate strings of numbers on display
function append(string) {
    displayText.textContent += string
}

    // operations
function add(a,b) {
    result = a + b;
    displayText.textContent = result;
    firstOperand.textContent = result
    currentOperator.textContent = ''
    return result;
}

function subtract(a,b) {
    result = a - b;
    displayText.textContent = result;
    firstOperand.textContent = result
    currentOperator.textContent = ''
    return result;
}

function multiply(a,b) {
    result = a * b;
    displayText.textContent = result;
    firstOperand.textContent = result
    currentOperator.textContent = ''
    return result;
}

function divide(a,b) {
    result = a / b;
    displayText.textContent = result;
    firstOperand.textContent = result
    currentOperator.textContent = ''
    return result;
}

    // compute
function operate(operand, a, b) {
    a = Number(a)
    b = Number(b)
    switch(operand) {
        case "+": 
        console.log(add(a, b))
        break;
        case "-": 
        console.log(subtract(a,b))
        break;
        case "*":
        console.log(multiply(a,b))
        break;
        case "/":
        console.log(divide(a,b))
        break;
        default: 
        return null;
    }
}

