function sumEvenNums(arr1, arr2) {
 
    let sum = 0;
    let indexCount = 0;
 
    for (let i = 0; i < arr1.length; i++) {
        let arr1Num = Number(arr1[i]);
        let arr2Num = Number(arr2[i]);
 
        if (arr1Num === arr2Num) {
            sum += arr1Num ;
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            return;
        }
        indexCount++;
 
    }
    console.log(`Arrays are identical. Sum: ${sum}`)
 
}

sumEvenNums(['10', '20', '30'], ['10', '20', '30'])
//sumEvenNums(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
//sumEvenNums(['1'], ['10'])