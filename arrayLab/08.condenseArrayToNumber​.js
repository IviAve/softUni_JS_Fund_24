function condenseArrayToNumber(array) {

    while (array.length > 1) {

        let condensed = [array.length - 1];
        for (let i = 0; i < array.length - 1; i++) {

            condensed[i] = Number(array[i]) + Number(array[i + 1]);
        }
        array = condensed;
    }
    console.log(array.join(' '));
}


condenseArrayToNumber([2, 10, 3])

condenseArrayToNumber([5,0,4,1,2])

condenseArrayToNumber([1])


// Write a program, which receives an array of numbers,
// and condenses them by summing adjacent couples of elements until a single number is obtained.
// // For example, if we have 3 elements [2, 10, 3],
// we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13},
// then we sum again all adjacent elements and obtain {12+13} = {25}.
// Hints
// While we have more than one element in the array nums[], repeat the following:
// •	Allocate a new array condensed[] of size nums.Length-1.
// •	Sum the numbers from nums[] to condensed[]:
// o	condensed[i] = nums[i] + nums[i+1]
// •	nums[] = condensed[]
