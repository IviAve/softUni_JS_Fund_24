function smallestOfThreeNumbers(num1, num2, num3) {

    // let minNum = Math.min(num1, num2, num3)
    // console.log(minNum);

    let firstMinNum = smallestOfThreeNumbers(num1, num2);
    let finalMinNum = smallestOfThreeNumbers(firstMinNum, num3)

    console.log(finalMinNum);

    function smallestOfThreeNumbers(num1, num2) {

        if (num1 < num2) {
            return num1;
        }
        return num2;
    }

}

smallestOfThreeNumbers(2,
    5,
    3
)

smallestOfThreeNumbers(600,
    342,
    123
)

smallestOfThreeNumbers(25,
    21,
    4
)

smallestOfThreeNumbers(2,
    2,
    2
)

// Write a function that receives three integers and prints the smallest number.
//  Use an appropriate name for the function.