function nonDecreasingSubset(array) {
//     let maxNum = Number.MIN_SAFE_INTEGER;
//     let newArr = [];


//     for (let i = 0; i < array.length; i++) {
//         let currentNum = array[i];
//         if (currentNum >= maxNum) {
//             maxNum = currentNum;
//             newArr.push(maxNum);

//         }

//     }
//     console.log(newArr.join(' '));

let max = array[0];
    let result = array.filter(currentNum => {
        if (currentNum >= max) {
            max = currentNum;
        }
        return currentNum >= max;
    });
    console.log(result.join(' '));
 }

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])

nonDecreasingSubset([1, 2, 3, 4])

nonDecreasingSubset([20, 3, 2, 15, 6, 1])

nonDecreasingSubset([-10,-6,5,15,10,22,1,-3])

// Write a function that extracts only those numbers that form a non-decreasing subset.
// In other words, you start from the first element and continue to the end of the given array of numbers.
//  Any number which is LESS THAN the current biggest one is ignored,
//  alternatively if it’s equal or higher than the current biggest one you set it as
//   the current biggest one and you continue to the next number.
// Input
// The input comes as an array of numbers.
// Output
// The output is the processed array after the filtration, which should be a non-decreasing subset.
//  The elements should be printed on one line, separated by a single space.
//  Hints
// ·	The Array.filter() built-in function might help you a lot with this problem.

