function addAndSubtract(array) {

    let oldSum = 0;
    let newSum = 0;
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        let curNum = array[i];
        oldSum += curNum;

        if (curNum % 2 === 0) {
            curNum += i;
        } else {
            curNum -= i;
        }

        newArr.push(curNum);
        //array[i] = curNum;
        newSum += curNum;
    }
    console.log(newArr);
    console.log(oldSum);
    console.log(newSum);
}

addAndSubtract([5, 15, 23, 56, 35])

//addAndSubtract([-5, 11, 3, 0, 2])


// Write a function, which changes the value of odd and even numbers in an array of numbers.
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position
// Output
// On the first line print the newly modified array, on the second line print the sum of numbers from the original array,
//  on the third line print the sum of numbers from the modified array.
