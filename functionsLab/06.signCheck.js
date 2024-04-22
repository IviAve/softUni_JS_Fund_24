function signCheck(num1, num2, num3) {

    let firstSum = (num1, num2) => {
        return num1 * num2;
    };

    let finalSum = firstSum(num1, num2) * num3;
    if (finalSum < 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }

}

signCheck(5,
    12,
    -15
)

signCheck(-6,
    -12,
    14
)

signCheck(-1,
    -2,
    -3
)

signCheck(-5,
    1,
    1
)


// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative.
//  Try to do this WITHOUT multiplying the 3 numbers.
// Input
// The input comes as parameters named numOne, numTwo, numThree.
// Output
// •	If the result is positive, print on the console -> "Positive"
// •	Otherwise, print -> "Negative"
