function negativeOrPositiveNumbers(array) {
    
    let result = sortingNumbers(array)
    console.log(result.join('\n'));

    function sortingNumbers(arr) {
        let newArr = [];

        for (const num of arr) {
            let number = num;
            if (number < 0) {
                newArr.unshift(number);

            }else{
                newArr.push(number);

            }
        }
        return newArr;
    }
}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])

negativeOrPositiveNumbers(['3', '-2', '0', '-1'])

// Write a function that processes the elements in an array one by one and produces a new array.
//  Prepend each negative element at the front of the array (as the first element)
//   and append each positive (or 0) element at the end of the array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console, each element on a new line.
