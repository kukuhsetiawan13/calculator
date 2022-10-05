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

function operate (operator, a, b) {
    return operator(a,b)
}

let a = 10
let b = 2

console.log(operate(divide,a,b))
