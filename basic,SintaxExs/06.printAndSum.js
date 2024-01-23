function printAndSum (startNum,endNum){
let sum = 0;
let buff = '';
for (let i = startNum; i <= endNum; i++) {
    buff += i + ' ';
    sum += i;

    
}
console.log(buff);
console.log(`Sum: ${sum}`);
}

printAndSum(0,26)

// Write a function that displays numbers from given start to given end and their sum.
//  The input comes as two number parameters. Print the result like the examples below: