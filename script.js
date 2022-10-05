//functions
function add(a,b) {
    return a+b
}

function minus(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
}

function operate(operator, a, b) {
    return operator(a,b);
}

// variables
let text = '';
let a;
let b;
let operator;


// addEventListener

// addEventListener - numbers
const btn0 = document.querySelector('#btn0') 
btn0.addEventListener('click', () => {
    
    let addZero = false;
    for (let i in text) {
        if (text[i] !== '0') {
            addZero = true;
        }
    }
    
    if (addZero) {
        text += '0'
        document.querySelector('#display').textContent = text;
    } else {
        document.querySelector('#display').textContent = "0";
    }

    
})

const btn1 = document.querySelector('#btn1') 
btn1.addEventListener('click', () => {
    text += '1'
    document.querySelector('#display').textContent = text;
})

const btn2 = document.querySelector('#btn2') 
btn2.addEventListener('click', () => {
    text += '2'
    document.querySelector('#display').textContent = text;
})

const btn3 = document.querySelector('#btn3') 
btn3.addEventListener('click', () => {
    text += '3'
    document.querySelector('#display').textContent = text;
})

const btn4 = document.querySelector('#btn4') 
btn4.addEventListener('click', () => {
    text += '4'
    document.querySelector('#display').textContent = text;
})

const btn5 = document.querySelector('#btn5') 
btn5.addEventListener('click', () => {
    text += '5'
    document.querySelector('#display').textContent = text;
})

const btn6 = document.querySelector('#btn6') 
btn6.addEventListener('click', () => {
    text += '6'
    document.querySelector('#display').textContent = text;
})

const btn7 = document.querySelector('#btn7') 
btn7.addEventListener('click', () => {
    text += '7'
    document.querySelector('#display').textContent = text;
})

const btn8 = document.querySelector('#btn8') 
btn8.addEventListener('click', () => {
    text += '8'
    document.querySelector('#display').textContent = text;
})

const btn9 = document.querySelector('#btn9') 
btn9.addEventListener('click', () => {
    text += '9'
    
    document.querySelector('#display').textContent = text;
})

// addEventListener - operators

const btnClear = document.querySelector('#btnClear') 
btnClear.addEventListener('click', () => {
    text = '';
    a = 0;
    b = 0;
    operator = '';
    
    document.querySelector('#display').textContent = "0";
})

const btnAdd = document.querySelector('#btnAdd') 
btnAdd.addEventListener('click', () => {
    operator = "add"
    a = Number(text);
    text = '';
    
    document.querySelector('#display').textContent = "+";
})

const btnMinus = document.querySelector('#btnMinus') 
btnMinus.addEventListener('click', () => {
    operator = "minus"
    a = Number(text);
    text = '';
    
    document.querySelector('#display').textContent = "-";
})

const btnMultiply = document.querySelector('#btnMultiply') 
btnMultiply.addEventListener('click', () => {
    operator = "multiply"
    a = Number(text);
    text = '';
    
    document.querySelector('#display').textContent = "*";
})

const btnDivide = document.querySelector('#btnDivide') 
btnDivide.addEventListener('click', () => {
    operator = "divide"
    a = Number(text);
    text = '';
    
    document.querySelector('#display').textContent = "/";
})

const btnEqual = document.querySelector('#btnEqual') 
btnEqual.addEventListener('click', () => {
    b = Number(text)
    text = ''
    
    let result = operate(operator,a,b)
    
    document.querySelector('#display').textContent = result;
    
})

//display

//questions

// setiap query selector harus bikin variable sendiri-sendiri?
// apakah loop bisa buat variable dengan template literal?
// apakah penamaan variable bisa semacam btn+ or btn-?
// id="4" kenapa ga bisa di query selector?










