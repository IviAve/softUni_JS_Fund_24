function maxNumber (array){

    let topNums = [];

    for (let i = 0; i < array.length; i++) {
        let curNum = array[i];
        
        let isTop = true;

        for (let j = i + 1; j < array.length; j++) {
            let rightNum = array[j];

            if (curNum <= rightNum) {
                isTop = false;
                break;
            }
            
        }
        if (isTop) {
            topNums.push(curNum);
        }
    }
    console.log(topNums.join(' '));
}

maxNumber([1, 4, 3, 2])

maxNumber([14, 24, 3, 19, 15, 17])

maxNumber([41, 41, 34, 20])

maxNumber([27, 19, 42, 2, 13, 45, 48])

// Write a function to find all the top integers in an array. 
// A top integer is an integer, which is bigger than all the elements to its right. 
// Output
// Print all top integers on the console, separated by a single space.
