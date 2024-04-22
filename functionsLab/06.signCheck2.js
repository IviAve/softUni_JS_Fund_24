function signCheck2(num1,num2,num3) {
    
    let negativeNumbers = 0;

    if (num1 < 0) {
        negativeNumbers++;
    } if (num2 < 0) {
        negativeNumbers++;
    } if (num3 < 0) {
        negativeNumbers++;
    }
    if (negativeNumbers % 2 !== 0) {
        console.log('Negative');
    }else{
        console.log('Positive');
    }
}

signCheck2(5,
    12,
    -15
)

signCheck2(-6,
    -12,
    14
)

signCheck2(-1,
    -2,
    -3
)

signCheck2(-5,
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

