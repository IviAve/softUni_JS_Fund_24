function sumOfOddNumbers(num) {

    let count = 0;
    let sum = 0;
    let currentNum = 0;
    let index = 1;
    while (count !== num) {
        if(index % 2 !== 0){
        console.log(index);
        sum += index;
        currentNum++;
        count++;
        
        }
        index++;
    }
console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(3)