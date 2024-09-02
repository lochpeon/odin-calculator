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
        case '−' :
            return subtract(a, b);
        case '×' :
            return multiply(a, b);
        case '÷' :
            return divide(a, b);
    }
}

function clear() {
    operandA = undefined;
    operandB = undefined;
    operator = undefined;
}

const board = document.querySelector('.cell.result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch(button.textContent) {
            case "AC":
                board.textContent = 0;
                clear();
                break;

            case "+":
            case "−":
            case "×":
            case "÷":
                if (operandA && operator) {
                    operandB = +board.textContent;
                    result = operate(operandA, operandB, operator);
                    board.textContent = result;
                }
                operandA = +board.textContent;
                operandB = undefined;
                operator = button.textContent;
                boardClear = true;
                break;

            case "=":
                if ((!operandB || !operandA) && boardClear) {
                    break;
                }

                if (operator) {
                    operandB = +board.textContent;
                    result = operate(operandA, operandB, operator);
                    board.textContent = result;
                } 

                clear();
                break;

            default:
                if(boardClear) {
                    board.textContent = 0;
                    result = undefined;
                    boardClear = false;
                }

                if(board.textContent === "0") {
                    board.textContent = button.textContent;
                } else {
                    board.textContent += button.textContent;
                }
                break;
        }
    });
});

let operandA;
let operandB;
let operator;
let result;
let boardClear = false;