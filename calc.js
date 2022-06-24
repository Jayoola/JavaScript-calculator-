const num1 = parseFloat(prompt('Enter number 1'))

const num2 = parseFloat(prompt('Enter number 2'))

const operation = prompt('Enter operation (+, -, *, /) ')
if (isNaN(num1) || isNaN(num2)) {
    alert('Wrong input. Refresh the page to start again')
}
if (operation == '+') {
    result = num1 + num2;
} else if (operation == '-') {
    result = num1 - num2;
} else if (operation == '*') {
    result = num1 * num2;
} else if (operation == '/') {
    result = num1 / num2;
}
alert(num1 + operation + num2 + '=' + result)
