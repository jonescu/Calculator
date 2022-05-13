const decimalBtn = document.getElementById('decimal')
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
        } else if(firstOperand.textContent != '' && currentOperator.textContent != '') {
             operate(currentOperator.textContent, firstOperand.textContent, displayText.textContent)
             firstOperand.textContent = displayText.textContent
             currentOperator.textContent = operand.textContent;
             displayText.textContent = ''
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
function test(){
    displayText.textContent = displayText.textContent.slice(0, -1)
}
backspaceBtn.addEventListener('click', test)

// OPERATIONS
function add(a,b) {
    let answer = a + b; 
    displayText.textContent = answer;
    return answer;
}

function subtract(a,b) {
    let answer = a - b;
    displayText.textContent = answer;
    return answer;
}

function multiply(a,b) {
    let answer = a * b;
    displayText.textContent = answer;
    return answer;
}

function divide(a,b) {
    let answer = a / b;
    displayText.textContent = answer;
    return answer;
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

