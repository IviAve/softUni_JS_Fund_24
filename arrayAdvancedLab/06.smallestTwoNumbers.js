function smallestTwoNumbers(array) {
    
    let sortedNums = array.sort((a,b) => (a - b)) ;
    let newArr = sortedNums.slice(0,2);

        
    
    console.log(newArr.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5])

smallestTwoNumbers([3, 0, 10, 4, 7, 3])


// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.
