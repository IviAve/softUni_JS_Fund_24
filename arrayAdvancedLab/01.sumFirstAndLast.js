function sumFirstAndLast(array) {
    
    let sum =FirstLastInx(array);
    console.log(sum);

    function FirstLastInx(arr) {
        let result = 0;
        let firstNum = arr.shift();
        let lastNum = arr.pop();

        result = Number(firstNum) + Number(lastNum);
        return result;
    }

}

sumFirstAndLast(['20', '30', '40'])

sumFirstAndLast(['5', '10'])


// Write a function that calculates and prints 
// the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console.
