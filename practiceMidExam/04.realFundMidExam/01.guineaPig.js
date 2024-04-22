function guineaPig(array) {

    let foodQuantityFor30Days = Number(array.shift());
    let hayQuantityFor30Days = Number(array.shift());
    let coverQuantityFor30Days = Number(array.shift());
    let weightPuppy = Number(array.shift());

    let foodInGr = foodQuantityFor30Days * 1000;
    let hayInGr = hayQuantityFor30Days * 1000;
    let coverInGr = coverQuantityFor30Days * 1000;
    let weightInGr = weightPuppy * 1000;

    let days = 1;

    while (days <= 30) {

        
        foodInGr -= 300;

        if (days % 2 === 0) {

            hayInGr -= foodInGr * 0.05;
        }
        if (days % 3 === 0) {

            coverInGr -= weightInGr / 3;
        }

        days++;


    }
    foodQuantityFor30Days =foodInGr /1000;
    hayQuantityFor30Days = hayInGr / 1000;
    coverQuantityFor30Days = coverInGr / 1000;


    if (foodQuantityFor30Days > 0 && hayQuantityFor30Days > 0 && coverQuantityFor30Days > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodQuantityFor30Days.toFixed(2)}, Hay: ${hayQuantityFor30Days.toFixed(2)}, Cover: ${coverQuantityFor30Days.toFixed(2)}.`);

    } else {
        console.log('Merry must go to the pet store!');
    }

}







guineaPig(["10",
    "5",
    "5.2",
    "1"])

guineaPig(["1",
    "1.5",
    "3",
    "1.5"])

guineaPig(["9",
    "5",
    "5.2",
    "1"])



// Merry has a guinea pig named Puppy, that she loves very much.
// Every month she goes to the nearest pet store and buys him everything he needs – food, hay, and cover.
// On the first three lines, you will receive the quantity of food, hay, and cover, which Merry buys for a month (30 days).
// On the fourth line, you will receive the guinea pig's weight.
// Every day Puppy eats 300 gr of food. Every second day Merry first feeds the pet,
//  then gives it a certain amount of hay equal to 5% of the rest of the food. On every third day,
//   Merry puts Puppy cover with a quantity of 1/3 of its weight.
// Calculate whether the quantity of food, hay, and cover, will be enough for a month.
// If Merry runs out of food, hay, or cover, stop the program!
// Input
// •	On the first line – quantity food in kilograms - a floating-point number in the range [0.0 – 10000.0].
// •	On the second line – quantity hay in kilograms - a floating-point number in the range [0.0 – 10000.0].
// •	On the third line – quantity cover in kilograms - a floating-point number in the range [0.0 – 10000.0].
// •	On the fourth line – guinea's weight in kilograms - a floating-point number in the range [0.0 – 10000.0].
// Output
// •	If the food, the hay, and the cover are enough, print:
// o	"Everything is fine! Puppy is happy! Food: {excessFood}, Hay: {excessHay}, Cover: {excessCover}."
// •	If one of the things is not enough, print:
// o	"Merry must go to the pet store!"
// The output values must be formatted to the second decimal place!

