function distinctArray(array) {

    let uniqueNumArr = [];
    for (let num = 0; num < array.length; num++) {
        if (!uniqueNumArr.includes(array[num])) {
            uniqueNumArr.push(array[num]);
            
        }
    }
    console.log(uniqueNumArr.join(' '));
}

distinctArray([1, 2, 3, 4])

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])

distinctArray([20, 8, 12, 13, 4, 4, 8, 5])


// You will be given an array of integer numbers on the first line of the input.
// Remove all repeating elements from the array.
// Print the result elements separated by a single space.
