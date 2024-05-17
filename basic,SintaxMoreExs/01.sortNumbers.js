function sortNumbers(num1,num2,num3) {
    // let first = Math.max(num1,num2,num3)
    // let second = 0;
    // let third = Math.min(num1,num2,num3)

    // if(num1 < first && num1 > third) {
    //     second = num1;
    // } else if(num2 < first && num2 > third) {
    //     second = num2;
    // } else {
    //     second = num3;
    // }
    // console.log(`${first}`);
    // console.log(`${second}`);
    // console.log(`${third}`);

    let nums = [num1|num2|num3];
    let array = nums.split();

    let sorted = array.sort((a,b) => a-b);
    newArr = sorted;
    console.log(newArr.join(' ')); 


    // let newArr = [];

    // let sorted = array.sort((a,b) => a-b);
    // newArr = sorted;
    // console.log(newArr.join(' ')); 

 }


// sortNumbers(2,
//     1,
//     3
//     )

// sortNumbers(-2,
//     1,
//     3
//     )

sortNumbers(0,
    0,
    2
    )

//Receive three numbers and you have to sort them in descending order.
// Print each number on a new line.