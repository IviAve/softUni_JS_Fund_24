function addAndSubtract(num1,num2,num3) {
    
    let totalSum = sumNums (num1,num2);
    let substract = totalSum - num3;

    console.log(substract);

    function sumNums(num1,num2) {
        let firstSum = num1 + num2;
        return firstSum;
    }
}

addAndSubtract(23,
    6,
    10
    )

addAndSubtract(1,
17,
30
)
addAndSubtract(42,
    58,
    100
    )



// You will receive three integer numbers. 
// Write a function sum() to calculate the sum of the first two integers and a function subtract()
// , which subtracts the result of the function sum() and the third integer.
