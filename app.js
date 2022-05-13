const decimalBtn = document.getElementById('decimal')
const message = document.getElementById('message')
const numberBtns = document.querySelectorAll('.number')
const operands = document.querySelectorAll('.operand')
const clearBtn = document.querySelector('.clear-btn')
const computeBtn = document.querySelector('.equals-btn')
const backspaceBtn = document.querySelector('.back-space')
let displayText = document.querySelector('.main-display')
let currentOperator = document.querySelector('.current-operator')
let firstOperand = document.querySelector('.first-operand')
displayText.textContent = '0'


//CLEAR DISPLAY
clearBtn.addEventListener('click', clear);
    
function clear() {
    displayText.textContent = '0'
    firstOperand.textContent = ''
    currentOperator.textContent = ''
    message.textContent = ''
    decimalBtn.disabled = false;
}


// CONCATENATE NUMBERS TO DISPLAY
function append(string) {
    displayText.textContent += string
}

numberBtns.forEach(button => {
    button.addEventListener('click', function() {
        if(displayText.textContent == '0') {
            displayText.textContent = ''
        } else if(displayText.className.includes('answer-exists')) {
            displayText.classList.toggle('answer-exists')
            displayText.textContent = ''
        } else if(displayText.textContent.length > 12) {
            message.textContent = 'Maximum digits reached for display'
            displayText.textContent = ''
        }
        append(button.textContent)
    })
});


operands.forEach(operand => {
    operand.addEventListener('click', function() {
        if(firstOperand.textContent == '') {
            firstOperand.textContent = displayText.textContent
            displayText.textContent = ''
            currentOperator.textContent = operand.textContent;
            decimalBtn.disabled = false;
        } 
        else if(firstOperand.textContent != '' && currentOperator.textContent != '') {
             operate(currentOperator.textContent, firstOperand.textContent, displayText.textContent)
             firstOperand.textContent = displayText.textContent
             currentOperator.textContent = operand.textContent;
             displayText.textContent = ''
             decimalBtn.disabled = false;
        }
    })
});

// CHECK FOR DECIMAL
decimalBtn.addEventListener('click', function() {
    decimalBtn.disabled = true;
})

// MAKE EQUALS BUTTON COMPUTE
computeBtn.addEventListener('click', function() {
    operate(currentOperator.textContent, firstOperand.textContent, displayText.textContent)
    firstOperand.textContent = ''
    currentOperator.textContent = ''
    displayText.classList.add('answer-exists')
})

//  BACKSPACE BUTTON
function backspace(){
    displayText.textContent = displayText.textContent.slice(0, -1)
}
backspaceBtn.addEventListener('click', backspace)

// OPERATIONS
function add(a,b) {
    let answer = a + b;
    var result = (answer - Math.floor(answer)) !== 0;
    if(result == true) {
        displayText.textContent = answer.toFixed(2)
    } else {
        displayText.textContent = answer;
    }
}

function subtract(a,b) {
    let answer = a - b;
    var result = (answer - Math.floor(answer)) !== 0;
    if(result == true) {
        displayText.textContent = answer.toFixed(2)
    } else {
        displayText.textContent = answer;
    }
}

function multiply(a,b) {
    let answer = a * b;
    var result = (answer - Math.floor(answer)) !== 0;
    if(result == true) {
        displayText.textContent = answer.toFixed(2)
    } else {
        displayText.textContent = answer;
    }
}

function divide(a,b) {
    let answer = a / b;
    var result = (answer - Math.floor(answer)) !== 0;
    if(b == 0) {
        answer = "Can't divide by 0"
    }
    if(result == true) {
        displayText.textContent = answer.toFixed(2)
    } else {
        displayText.textContent = answer;
    }
}

    // compute
function operate(operand, a, b) {
    a = Number(a)
    b = Number(b)
    switch(operand) {
        case "+": 
        add(a, b)
        break;
        case "-": 
        subtract(a,b)
        break;
        case "*":
        multiply(a,b)
        break;
        case "/":
        divide(a,b)
        break;
        default: 
        return null;
    }
}

