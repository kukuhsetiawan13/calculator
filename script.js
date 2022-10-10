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
   if (operator === "add") {
    return add(a,b)
   } else if (operator === "minus") {
    return minus(a,b)
   } else if (operator === "multiply") {
    return multiply(a,b)
   } else if (operator === "divide") {
    return divide(a,b)
   }
}

// variables
let text = '';
let a;
let b;
let operator;
let result;


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
    a = undefined;
    b = undefined;;
    operator = undefined;
    result = undefined;
    console.log(text, a, b, operator, result)
    
    document.querySelector('#display').textContent = "0";
})


const btnAdd = document.querySelector('#btnAdd') 
btnAdd.addEventListener('click', () => {
    
    if (result) {
        a = result;
        operator = "add"
        text = '';
    } else {
        if (!operator) {
            a = Number(text);
            text = '';
            operator = "add"
        } else { // 6 - 3 + 5 * 4
            b = Number(text)
            text = '';
            let temp = operate(operator,a,b)
            a = temp;
            operator = "add"
        }
        
    }
    
    document.querySelector('#display').textContent = "+";
})

const btnMinus = document.querySelector('#btnMinus') 
btnMinus.addEventListener('click', () => {

    
    if (result) {
        a = result;
        operator = "minus"
        text = '';
    } else {
        if (!operator) {
            a = Number(text);
            text = '';
            operator = "minus"
        } else { // 6 - 3 + 5 * 4
            b = Number(text)
            text = '';
            let temp = operate(operator,a,b)
            a = temp;
            operator = "minus"
        }
        
    }
    
    document.querySelector('#display').textContent = "-";
})

const btnMultiply = document.querySelector('#btnMultiply') 
btnMultiply.addEventListener('click', () => {

    
    if (result) {
        a = result;
        operator = "multiply"
        text = '';
    } else {
        if (!operator) {
            a = Number(text);
            text = '';
            operator = "multiply"
        } else { // 6 - 3 + 5 * 4
            b = Number(text)
            text = '';
            let temp = operate(operator,a,b)
            a = temp;
            operator = "multiply"
        }
        
    }
    
    document.querySelector('#display').textContent = "*";
})

const btnDivide = document.querySelector('#btnDivide') 
btnDivide.addEventListener('click', () => {
 
    if (result) {
        a = result;
        operator = "divide"
        text = '';
    } else {
        if (!operator) {
            a = Number(text);
            text = '';
            operator = "divide"
        } else { // 6 - 3 + 5 * 4
            b = Number(text)
            text = '';
            let temp = operate(operator,a,b)
            a = temp;
            operator = "divide"
        }
        
    }
    
    document.querySelector('#display').textContent = "/";
})

const btnEqual = document.querySelector('#btnEqual') 
btnEqual.addEventListener('click', () => {
    
    

    b = Number(text)

    
    if (operator && a && b) {
        if (operator === "divide" && b === 0) {
            document.querySelector('#display').textContent = "Error";
            text = '';
            a = 0;
            b = 0;
            operator = '';
            result;
        } else {
            result = operate(operator,a,b)
            document.querySelector('#display').textContent = result;
            
        }
        
    } else {
        document.querySelector('#display').textContent = "Error";
        text = '';
        a = 0;
        b = 0;
        operator = '';
        result;
    }
    
    
})

//display












