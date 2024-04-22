function simpleCalculator(firstNumber,secondNumber,operator) {
    
    switch (operator) {
        case  'multiply':
            let multiply = (a,b) => a * b;
            console.log(multiply(firstNumber,secondNumber));
            break;
            case  'divide':
            let divide = (a,b) => a / b;
            console.log(divide(firstNumber,secondNumber));
            break;
            case  'add':
            let add = (a,b) => a + b;
            console.log(add(firstNumber,secondNumber));
            break;
            case  'subtract':
            let subtract = (a,b) => a - b;
            console.log(subtract(firstNumber,secondNumber));
            break;
    
        
    }
}

simpleCalculator(5,
    5,
    'multiply'
    )

simpleCalculator(40,
    8,
    'divide'
    )

simpleCalculator(12,
    19,
    'add'
    )

simpleCalculator(50,
    13,
    'subtract'
    )

//     Write a function that receives three parameters – two numbers and an operator (string)
//      – and calculates the result depending on the operator. Operator can be 'multiply', 'divide', 'add' or 'subtract'.
//       Try to solve this task using arrow functions.
// Bonus
// Solve this task without using any conditional statements (no if or switch statements or ternary operators).
// Input
// The input comes as parameters named numOne, numTwo, operator.
