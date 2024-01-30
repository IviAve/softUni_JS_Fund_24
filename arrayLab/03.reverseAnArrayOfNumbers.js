function reverseAnArrayOfNumbers (num,arr){

    // let newArr = arr.slice(0,num);
     //let reversedArr = newArr.reverse();
     //console.log(reversedArr.join (' '));

//console.log("--------------------------------");

let newArray = [];
for (let index = 0; index < num; index++) {
    let curNum = arr[index];
    newArray.push(curNum);
    
}
let reversedArray = newArray.reverse();

console.log(reversedArray.join(' '));

//console.log('=============================');

// let newArray = [];

// for (let index = 0; index < num; index++) {
//     let curNum  = arr[index];
//     newArray.unshift(curNum)
    
// }

// console.log(newArray.join(' '));

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])

// Write a program, which receives a number n and an array of elements.
//  Your task is to create a new array with n numbers from the original array,
//   reverse it and print its elements on a single line, space-separated.