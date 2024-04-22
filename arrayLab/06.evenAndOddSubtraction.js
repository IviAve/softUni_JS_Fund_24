function evenAndOddSubtraction (array){

    let oddSum = 0;
    let evenSum = 0;

    for (let index = 0; index < array.length; index++) {
        let num =Number(array[index]);
        if (num % 2 === 0) {
            evenSum += num;
        }
        else{
            oddSum += num;
        }
        
    }
    let difference = evenSum - oddSum;
    console.log(difference);
}

evenAndOddSubtraction([1,2,3,4,5,6])
evenAndOddSubtraction([3,5,7,9])
evenAndOddSubtraction([2,4,6,8,10])


// Write a program that calculates the difference between 
// the sum of the even and the sum of the odd numbers in an array.