function jansNotation(array) {
    let stack = [];

    for (let i = 0; i < array.length; i++) {
        let token = array[i];

        if (!isNaN(token)) {
            stack.push(parseFloat(token));
        } else {
            if (stack.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            
            let operand2 = stack.pop();
            let operand1 = stack.pop();

            if (token === '+') {
                stack.push(operand1 + operand2);
            } else if (token === '-') {
                stack.push(operand1 - operand2);
            } else if (token === '*') {
                stack.push(operand1 * operand2);
            } else if (token === '/') {
                if (operand2 === 0) {
                    console.log('Error: division by zero!');
                    return;
                }
                stack.push(operand1 / operand2);
            } else {
                console.log('Error: invalid operator!');
                return;
            }
        }
    }

    if (stack.length === 1) {
        console.log(stack[0]);
    } else {
        console.log('Error: too many operands!');
    }
}


jansNotation([3,
    4,
    '+']
   )
jansNotation([5,
    3,
    4,
    '*',
    '-']
   )
jansNotation([7,
    33,
    8,
    '-']
   )
jansNotation([15,
    '/']
   )
jansNotation([31,
    2,
    '+',
    11,
    '/']
   )
jansNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
   )




// Write a program that parses a series of instructions written in postfix notation
//  and executes them (postfix means the operator is written after the operands). 
//  You will receive a series of instructions – if the instruction is a number, save it; 
//  otherwise, the instruction is an arithmetic operator (+-*/) and you must 
//  apply it to the most two most recently saved numbers. Discard these two 
//  numbers and in their place, save the result of the operation – 
//  this number is now eligible to be an operand in a subsequent operation. 
//  Keep going until all input instructions have been exhausted, or you encounter an error.
// In the end, if you’re left with a single saved number, 
// this is the result of the calculation and you must print it. 
// If there are more numbers saved, then the user-supplied 
// too many instructions and you must print "Error: too many operands!". 
// If at any point during the calculation you don’t have two numbers saved, 
// the user-supplied too few instructions and you must print "Error: not enough operands!". 
//  See the examples for more details.
// Input
// You will receive an array with numbers and strings – 
// the numbers will be operands and must be saved; the strings 
// will be arithmetic operators that must be applied to the operands.
// Output
// Print on the console on a single line the final result of the 
// calculation or an error message, as instructed above.
// Constraints
// •	The numbers (operands) will be integers
// •	The strings (operators) will always be one of +-*/
// •	The result of each operation will be in the range [-253…253-1] 
// (MAX_SAFE_INTEGER will never be exceeded)
