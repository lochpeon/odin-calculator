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
            return Math.round(add(a, b) * 100) / 100;
        case '−' :
            return Math.round(subtract(a, b) * 100) / 100;
        case '×' :
            return Math.round(multiply(a, b) * 100) / 100;
        case '÷' :
            return Math.round(divide(a, b) * 100) / 100;
    }
}

function getResult() {
    operandB = +board.textContent;
    result = operate(operandA, operandB, operator);
    if (result == Infinity) {
        result = "nope";
    }
    board.textContent = result;
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
                if(boardClear) {
                    board.textContent = "0";
                    clear();
                    break;
                } else if (operandA && operator) {
                    getResult();
                }
                operandA = +board.textContent;
                operandB = undefined;
                boardClear = true;

                operator = button.textContent;
                break;

            case "+/−":
            case "%":
                break;

            case ".":
                if(!board.textContent.includes(".")) {
                    board.textContent += button.textContent;
                }
                break;

            case "=":
                if ((!operandB || !operandA) && boardClear) {
                    break;
                }

                if (operator) {
                    getResult();
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