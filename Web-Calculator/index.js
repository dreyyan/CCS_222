// Global variable
let hasOperation = true;

// FUNCTIONS: Utility
function clearInput() {
    let inputBox = document.querySelector("#input-output-display");
    inputBox.value = '';
}

function backspace() {
    let inputBox = document.querySelector("#input-output-display");
    inputBox.value = inputBox.value.substring(0, inputBox.value.length - 1);
}

// FUNCTIONS: Operations
function append(number) {
    let inputBox = document.querySelector("#input-output-display");
    hasOperation = false;

    if (inputBox.value.length == 1 && inputBox.value.substring(inputBox.value.length - 1) == '0') {
        return;
    } else {
        inputBox.value += number;
    }
}

function appendOperation(operation) {
    let inputBox = document.querySelector("#input-output-display");
    if (inputBox.value == "") {
        alert("ERROR: Please enter a number before an operation")
    } else if (hasOperation) {
        alert("ERROR: 2 Consecutive Operations are not allowed")
    } else {
        inputBox.value += operation;
        hasOperation = true;
    }
}

function calculate() {
    let inputBox = document.querySelector("#input-output-display");

    let result = eval(inputBox.value);
    inputBox.value = result;
}