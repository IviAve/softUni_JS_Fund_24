function numbers(input) {
    
    let nums = input.split(' ').map(Number);
    let  sum = nums.reduce((a, b) => a + b, 0);
    let average = sum / nums.length;

    let top5AboveAverage = nums.filter(num => num > average).sort((a, b) => b - a).slice(0, 5);
                                  
    
    if (top5AboveAverage.length > 0) {
        console.log(top5AboveAverage.join(' '));
    } else {
        console.log('No');
    }
}

numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1')
numbers('-1 -2 -3 -4 -5 -6')


// Write a program to read a sequence of integers and find and print 
// the top 5 numbers greater than the average value in the sequence, sorted in descending order.
// Input
// •	Read from the console a single line holding space-separated integers.
// Output
// •	Print the above-described numbers on a single line, space-separated. 
// •	If less than 5 numbers hold the property mentioned above, print less than 5 numbers. 
// •	Print "No" if no numbers hold the above property.
// Constraints
// •	All input numbers are integers in the range [-1 000 000 … 1 000 000]. 
// •	The count of numbers is in the range [1…10 000].
