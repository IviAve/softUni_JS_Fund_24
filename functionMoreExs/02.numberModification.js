function numberModification(num) {

    let numToStr = String(num);

    let sum = 0;
    let averageSum = 0;
    while (averageSum <= 5) {

        for (let n = 0; n < numToStr.length; n++) {
            let number = Number(numToStr[n])
            sum += number;
            averageSum = sum / numToStr.length;
            
        }
        if (averageSum <= 5) {
            numToStr += 9;
            sum = 0;
        }
    }

console.log(numToStr);
}

numberModification(101)
numberModification(5835)


// Write a JS program that changes a number until the average of all its digits is not higher than 5.
//  To modify the number, your program should append a 9 to the end of the number,
//   when the average value of all its digits is higher than 5 the program should stop appending.
// The input is a single number.
// The output should consist of a single number - the final modified number
// which has an average value of all its digits higher than 5.
//  The output should be printed on the console.
// Constraints
// •	The input number will consist of no more than 6 digits.
// •	The input will be a valid number (there will be no leading zeroes).
