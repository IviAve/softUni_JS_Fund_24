function factorialDivision(num1,num2) {
    
    let factorial1 = calculateFactorial(num1);
    let factorial2 = calculateFactorial(num2);

let divided = factorial1/factorial2;
console.log(divided.toFixed(2));

    function calculateFactorial(num) {
        let factorial = 1;
        while (num > 1) {
            factorial *= num;
            num--;
        }
        return factorial;
    }
}

factorialDivision(5,2)

factorialDivision(6,2)


// Write a function that receives two integer numbers. 
// Calculate the factorial of each number.
//  Divide the first result by the second and
// print the division formatted to the second decimal point.