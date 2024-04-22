function printNthElement(array) {
    
    let newArr = [];

    let lastElement = array.pop();
    let count = Number(lastElement);
    for (let i = 0; i < array.length; i += count) {
        
        let number = array[i];
        newArr.push(number);

    }

    console.log(newArr.join(' '));
}
//printNthElement(['5', '20', '31', '4', '20', '2'])
//printNthElement(['dsa', 'asd', 'test', 'test', '2'])
printNthElement(['1', '2', '3', '4', '5', '6'])

// Write a function that collects each element of an array, on a given step.
// The input comes as an array of strings. The last element is N - the step.
// The collections are every element on the N-th step starting from the first one. If the step is "3",
// you need to print the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array.
// Then, print elements in a row, separated by a single space.
