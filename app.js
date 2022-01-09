//-----------------------------------SELECTORS-------------------------------------------
const output = document.getElementById('output');
const clear = document.getElementById('clear');
const del = document.getElementById('delete');
const division_btn = document.getElementById('division');
const multiply_btn = document.getElementById('multiply');
const subtract_btn = document.getElementById('subtract');
const add_btn = document.getElementById('add');
const equals = document.getElementById('equals');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const negative = document.getElementById('negative');
const decimal = document.getElementById('decimal');
const digit = document.querySelectorAll('.digit');
const operation = document.querySelectorAll('.operation');

//------------------------------INITIALIZATIONS--------------------------------------
let firstOperand = null;
let currentOperand = null;
let operator = '';
let display = '';
let justPressedEquals = false;
outputDisplay();

//--------------------------------EVENT LISTENERS------------------------------------------

zero.addEventListener('click', inputZero);
function inputZero(){

    if(display.length >= 14) {
        alert('Can\'t enter more than 14 digits');
    }else{
        switch (justPressedEquals){
            case true:
                justPressedEquals = false;
                inputClear();
                display += '0';
                outputDisplay(); 
                break;
            case false:
                display += '0';
                outputDisplay(); 
                break;
        }
    }
}

one.addEventListener('click', inputOne);
function inputOne() {
    if(display.length >= 14) {
        alert('Can\'t enter more than 14 digits');
    }else{
        switch (justPressedEquals){
            case true:
                justPressedEquals = false;
                inputClear();
                display += '1';
                outputDisplay(); 
                break;
            case false:
                display += '1';
                outputDisplay(); 
                break;
        }
    }
}

two.addEventListener('click', inputTwo);
function inputTwo(){
    if(display.length >= 14) {
        alert('Can\'t enter more than 14 digits');
    }else{
        switch (justPressedEquals){
            case true:
                justPressedEquals = false;
                inputClear();
                display += '2';
                outputDisplay(); 
                break;
            case false:
                display += '2';
                outputDisplay(); 
                break;
        }
    }
}

three.addEventListener('click', inputThree)
function inputThree(){
    if(display.length >= 14) {
        alert('Can\'t enter more than 14 digits');
    }else{
        switch (justPressedEquals){
            case true:
                justPressedEquals = false;
                inputClear();
                display += '3';
                outputDisplay(); 
                break;
            case false:
                display += '3';
                outputDisplay(); 
                break;
        }
    }
}

four.addEventListener('click', inputFour);
function inputFour(){
    if(display.length >= 14) {
        alert('Can\'t enter more than 14 digits');
    }else{
        switch (justPressedEquals){
            case true:
                justPressedEquals = false;
                inputClear();
                display += '4';
                outputDisplay(); 
                break;
            case false:
                display += '4';
                outputDisplay(); 
                break;
        }
    }
}

five.addEventListener('click', inputFive);
function inputFive(){
    if(display.length >= 14) {
        alert('Can\'t enter more than 14 digits');
    }else{
        switch (justPressedEquals){
            case true:
                justPressedEquals = false;
                inputClear();
                display += '5';
                outputDisplay(); 
                break;
            case false:
                display += '5';
                outputDisplay(); 
                break;
        }
    }
}

six.addEventListener('click', inputSix);
function inputSix(){
    if(display.length >= 14) {
        alert('Can\'t enter more than 14 digits');
    }else{
        switch (justPressedEquals){
            case true:
                justPressedEquals = false;
                inputClear();
                display += '6';
                outputDisplay(); 
                break;
            case false:
                display += '6';
                outputDisplay(); 
                break;
        }
    }
}

seven.addEventListener('click', inputSeven);
function inputSeven(){
    if(display.length >= 14) {
        alert('Can\'t enter more than 14 digits');
    }else{
        switch (justPressedEquals){
            case true:
                justPressedEquals = false;
                inputClear();
                display += '7';
                outputDisplay(); 
                break;
            case false:
                display += '7';
                outputDisplay(); 
                break;
        }
    }
}

eight.addEventListener('click', inputEight);
function inputEight(){
    if(display.length >= 14) {
        alert('Can\'t enter more than 14 digits');
    }else{
        switch (justPressedEquals){
            case true:
                justPressedEquals = false;
                inputClear();
                display += '8';
                outputDisplay(); 
                break;
            case false:
                display += '8';
                outputDisplay(); 
                break;
        }
    }
};

nine.addEventListener('click', inputNine);
function inputNine(){
    if(display.length >= 14) {
        alert('Can\'t enter more than 14 digits');
    }else{
        switch (justPressedEquals){
            case true:
                justPressedEquals = false;
                inputClear();
                display += '9';
                outputDisplay(); 
                break;
            case false:
                display += '9';
                outputDisplay(); 
                break;
        }
    }
}

negative.addEventListener('click', inputNegative);
function inputNegative(){
    switch (justPressedEquals){
        case true:
            justPressedEquals = false;
            inputClear();
            display += '-';
            outputDisplay(); 
            break;
        case false:
            display += '-';
            outputDisplay(); 
            break;
    }
}

decimal.addEventListener('click', inputDecimal);
function inputDecimal(){
    if(display.length >= 14) {
        alert('Can\'t enter more than 14 digits');
    }else{
        switch (justPressedEquals){
            case true:
                justPressedEquals = false;
                inputClear();
                display += '.';
                outputDisplay(); 
                break;
            case false:
                display += '.';
                outputDisplay(); 
                break;
        }
    }
}

division_btn.addEventListener('click', inputDivision);
function inputDivision(){

    switch (justPressedEquals){
        case true:
            justPressedEquals = false;
            if (firstOperand === null) {
                operator = '÷';
                firstOperand = Number(display);
                display += '÷';
                outputDisplay();
            }else{
                currentOperand = Number(getSecondOperand());
                display = parseFloat(operate(firstOperand,currentOperand).toFixed(5));
                firstOperand = Number(display);
                operator = '÷';
                display += '÷';
                outputDisplay();
            }
            break;
        case false:
            if (firstOperand === null) {
                operator = '÷';
                firstOperand = Number(display);
                display += '÷';
                outputDisplay();
            }else{
                currentOperand = Number(getSecondOperand());
                display = parseFloat(operate(firstOperand,currentOperand).toFixed(5));
                firstOperand = Number(display);
                operator = '÷';
                display += '÷';
                outputDisplay();
            }
            break;
    }  
}

multiply_btn.addEventListener('click', inputMultiply);
function inputMultiply(){

    switch (justPressedEquals){
        case true:
            justPressedEquals = false;
            if (firstOperand === null) {
                operator = '×';
                firstOperand = Number(display);
                display += '×';
                outputDisplay();
            }else{
                currentOperand = Number(getSecondOperand());
                display = parseFloat(operate(firstOperand,currentOperand).toFixed(5));
                firstOperand = Number(display);
                operator = '×';
                display += '×';
                outputDisplay();
            }
            break;
        case false:
            if (firstOperand === null) {
                operator = '×';
                firstOperand = Number(display);
                display += '×';
                outputDisplay();
            }else{
                currentOperand = Number(getSecondOperand());
                display = parseFloat(operate(firstOperand,currentOperand).toFixed(5));
                firstOperand = Number(display);
                operator = '×';
                display += '×';
                outputDisplay();
            }
            break;
    }    
}

subtract_btn.addEventListener('click', inputSubtract);
function inputSubtract(){

    switch (justPressedEquals){
        case true:
            justPressedEquals = false;
            if (firstOperand === null) {
                operator = '−';
                firstOperand = Number(display);
                display += '−';
                outputDisplay();
            }else{
                currentOperand = Number(getSecondOperand());
                display = parseFloat(operate(firstOperand,currentOperand).toFixed(5));
                firstOperand = Number(display);
                operator = '−';
                display += '−';
                outputDisplay();
            }
            break;
        case false:
            if (firstOperand === null) {
                operator = '−';
                firstOperand = Number(display);
                display += '−';
                outputDisplay();
            }else{
                currentOperand = Number(getSecondOperand());
                display = parseFloat(operate(firstOperand,currentOperand).toFixed(5));
                firstOperand = Number(display);
                operator = '−';
                display += '−';
                outputDisplay();
            }
            break;
    }
}

add_btn.addEventListener('click', inputAdd);
function inputAdd(){

    switch (justPressedEquals){
        case true:
            justPressedEquals = false;
            if (firstOperand === null) {
                operator = '+';
                firstOperand = Number(display);
                display += '+';
                outputDisplay();
            }else{
                currentOperand = Number(getSecondOperand());
                display = parseFloat(operate(firstOperand,currentOperand).toFixed(5));
                firstOperand = Number(display);
                operator = '+';
                display += '+';
                outputDisplay();
            }
            break;
        case false:
            if (firstOperand === null) {
                operator = '+';
                firstOperand = Number(display);
                display += '+';
                outputDisplay();
            }else{
                currentOperand = Number(getSecondOperand());
                display = parseFloat(operate(firstOperand,currentOperand).toFixed(5));
                firstOperand = Number(display);
                operator = '+';
                display += '+';
                outputDisplay();
            }
            break;
    }
}

clear.addEventListener('click', inputClear);
function inputClear(){
    display = '';
    firstOperand = null;
    currentOperand = null;
    operator = '';
    outputDisplay();
}

del.addEventListener('click', delInput);
function delInput(){

    switch (justPressedEquals){
        case true:
            justPressedEquals = false;
            inputClear();
            break;
        case false:
            display = display.slice(0,display.length-1);
            outputDisplay();
            break;
    }
}

equals.addEventListener('click', equalsInput);
function equalsInput(){
    currentOperand = Number(getSecondOperand());
    display = parseFloat(operate(firstOperand,currentOperand).toFixed(5)).toString();
    outputDisplay();
    firstOperand = null;
    currentOperand = Number(display);
    justPressedEquals = true;
}

digit.forEach((digit) => {
    digit.addEventListener('mousedown', ()=> {
        digit.style.backgroundColor = `rgba(255,255,255,.3)`;
        digit.style.fontSize = '23px';
    })
    digit.addEventListener('mouseup', ()=> {
        digit.style.backgroundColor = `rgba(255,255,255,.15)`;
        digit.style.fontSize = '28px';
    })
})

operation.forEach((operation) => {
    operation.addEventListener('mousedown', ()=> {
        operation.style.backgroundColor = `rgba(255,255,255,.3)`;
        operation.style.fontSize = '23px';
    })
    operation.addEventListener('mouseup', ()=> {
        operation.style.backgroundColor = `rgba(255,255,255,.15)`;
        operation.style.fontSize = '28px';
    })
})

clear.addEventListener('mousedown', ()=> {
    clear.style.backgroundColor = `rgba(255,255,255,.3)`;
    clear.style.fontSize = '23px';
})
clear.addEventListener('mouseup', ()=> {
    clear.style.backgroundColor = `rgba(255,255,255,.15)`;
    clear.style.fontSize = '28px';
});

//--------------------------------KEYBOARD SUPPORT---------------------------------------
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case '0':
            inputZero();
            break;
        case '1':
            inputOne();
            break;
        case '2':
            inputTwo();
            break;
        case '3':
            inputThree();
            break;
        case '4':
            inputFour();
            break;
        case '5':
            inputFive();
            break;
        case '6':
            inputSix();
            break;
        case '7':
            inputSeven();
            break;
        case '8':
            inputEight();
            break;
        case '9':
            inputNine();
            break;
        case '.':
            inputDecimal();
            break;
        case '/':
            inputDivision();
            break;
        case '*':
            inputMultiply();
            break;
        case '-':
            inputSubtract();
            break;
        case '+':
            inputAdd();
            break;
        case 'Backspace':
            delInput();
            break;
        case 'Enter':
        case '=':
            equalsInput();
            break;
    }    
});

//-----------------------------CALCULATIONS----------------------------------------------

function addition(a,b) {
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b){
    switch(operator){
        case '+':
            return addition(a,b);
            break;
        case '−':
            return subtract(a,b);
            break;
        case '×':
            return multiply(a,b);
            break;
        case '÷':
            if(b === 0){
                alert("ERROR: Divison by 0");
                return null;
            }else{
                return divide(a,b);
            }            
            break;
    }
}

function getSecondOperand(){
    let removeThisString = firstOperand + operator;
  //console.log(`${typeof display}`)
    return display.replace(removeThisString, '');
}

//----------------------- POPULATE THE DISPLAY--------------------------------------

function outputDisplay(){
    output.textContent = display;
}
