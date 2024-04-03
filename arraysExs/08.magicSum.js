function magicSum(array, megicNum) {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let num1 = array[i];

        for (let j = i + 1; j < array.length; j++) {
            let num2 = array[j];
            sum = num1 + num2;
            if (sum === megicNum) {
                console.log(`${num1} ${num2}`);
            }
        }
    }
    
}

magicSum([1, 7, 6, 2, 19, 23],
    8
)
magicSum([14, 20, 60, 13, 7, 19, 8],
    27
)
magicSum([1, 2, 3, 4, 5, 6],
    6
)

// Write a function, which prints all unique pairs in an
// array of integers whose sum is equal to a given number. 