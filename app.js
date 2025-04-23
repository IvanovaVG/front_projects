const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitButton = document.getElementById('submit')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const multuplyButton = document.getElementById('multuply')
const divideButton = document.getElementById('divide')
let action = "+"


plusButton.onclick = function() {
    action = "+"
}

minusButton.onclick = function() {
    action = "-"
}
multuplyButton.onclick = function() {
    action = "*"
}

divideButton.onclick = function() {
    action = "/"
}

function computeResult(action, input1, input2 ){
    const num1 = Number(input1.value )
    const num2 = Number(input2.value )
    if (action =="+") {
        return num1 + num2
    } if (action == "-") {
        return num1 - num2
    } if (action == "*") {
        return num1 * num2
    }
    if (action == "/") {
        return num1 / num2
    }
   
   
}


submitButton.onclick = function() {
    const data = computeResult(action, input1, input2)
    resultElement.textContent = data
}