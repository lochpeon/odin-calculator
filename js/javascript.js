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
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+' :
            return add(a, b);
        case '-' :
            return subtract(a, b);
        case '*' :
            return multiply(a, b);
        case '/' :
            return divide(a, b);
    }
}

const board = document.querySelector('.cell.result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch(button.textContent) {
            case "AC":
                board.textContent = 0;
                break;
            case "+":
            case "−":
            case "×":
            case "÷":
                break;
            case "=":
                break;
            default:
                if(board.textContent === "0") {
                    board.textContent = button.textContent;
                } else {
                    board.textContent += button.textContent;
                }
                currentNumber = board.textContent;
                break;
        }
    });
});

let operandA = 0;
let operandB = 0;
let operator;
let currentNumber = 0;