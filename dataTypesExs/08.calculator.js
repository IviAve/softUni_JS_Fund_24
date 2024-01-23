function calculator(num1, operator, num2) {

    let sum = 0;
    switch (operator) {
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 - num2;
            break;
        case '*':
            sum = num1 * num2;
            break;
        case '/':
            sum = num1 / num2;
            break;

    }
    console.log(`${sum.toFixed(2)}`);
}

calculator(5,
    '+',
    10
)
calculator(25.5,
    '-',
    3
)


// Write a function that receives 3 parameters: a number, an operator (string), and another number.
// The operator can be:  '+', '-', '/', '*'. Print the result of the calculation
// on the console formatted to the second decimal point.
