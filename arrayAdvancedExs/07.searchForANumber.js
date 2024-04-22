function searchForANumber(array, actions) {
    let numToTake = actions[0];
    let numToDelete = actions[1];
    let searchNum = actions[2];

    let newArr = array.slice(0, numToTake);
    newArr.splice(0, numToDelete);

    let count = 0;
   

    for (let num of newArr) {

        if (searchNum === num) {
           
            count++;
        }
    }

    console.log(`Number ${searchNum} occurs ${count} times.`);
}

// searchForANumber([5, 2, 3, 4, 1, 6],
//     [5, 2, 3]
// )

// searchForANumber([7, 1, 5, 8, 2, 7],
//     [3, 1, 5]
// )
searchForANumber([5, 2, 3, 4, 3, 3, 1, 6],[8,2,3])


// You will receive two arrays of integers. The second array is containing exactly three numbers.
// The first number represents the number of elements you have
//  to take from the first array (starting from the first one).
// The second number represents the number of elements you have to
//  delete from the numbers you took (starting from the first one).
// The third number is the number we search in our collection after the manipulations.
// As output print how many times that number occurs in our array in the following format:
// "Number {number} occurs {count} times."
