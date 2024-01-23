function englishNameOfTheLastDigit(num) {
    if (num % 10 === 0) {
        console.log('zero');
    } else if (num % 10 === 1) {
        console.log('one');
    } else if (num % 10 === 2) {
        console.log('two');
    } else if (num % 10 === 3) {
        console.log('three');
    } else if (num % 10 === 4) {
        console.log('four');
    } else if (num % 10 === 5) {
        console.log('five');
    } else if (num % 10 === 6) {
        console.log('six');
    } else if (num % 10 === 7) {
        console.log('seven');
    } else if (num % 10 === 8) {
        console.log('eiгth');
    } else if (num % 10 === 9) {
        console.log('nine');
    }
}

englishNameOfTheLastDigit(1643)

// Write a function that returns the English name of the last digit of a given number.
// Write a program that receives a number and prints the returned value from this function.
