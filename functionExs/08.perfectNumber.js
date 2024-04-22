function perfectNumber(num) {

    let result = sum(num);

    if (result === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

    function sum(num) {
        let sum = 0;
        for (let i = 0; i < num; i++) {

            if (num % i === 0) {
                sum += i;
            }
        }

        return sum;
    }

}

perfectNumber(6)

// perfectNumber(28)

// perfectNumber(1236498)

// Write a function that receives a number and checks if that number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors.
// That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
// Output
// •	If the number is perfect, print: "We have a perfect number!"
// •	Otherwise, print: "It's not so perfect."
// Hint
// Equivalently, a perfect number is a number that is half the sum of all of its
// positive divisors (including itself) => 6 is a perfect number because it is the sum of 1 + 2 + 3
// (all of which are divided without residue).
// •	Read about the Perfect number here: https://en.wikipedia.org/wiki/Perfect_number

