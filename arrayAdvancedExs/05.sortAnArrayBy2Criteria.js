function sortAnArrayBy2Criteria(array) {
    
    let sortedArr = array.sort((a,b) => a.length - b.length || a.localeCompare(b));

    console.log(sortedArr.join('\n'));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])

sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])


// Write a function that orders an array of strings, by their length in ascending order 
// as primary criteria, and by alphabetical value in ascending order as second criteria. 
// The comparison should be case-insensitive.
// The input comes as an array of strings.
// The output is the ordered array of strings, each on a separate line.
// ·	An array can be sorted by passing a comparing function to the Array.sort() function
// ·	Creating a comparing function by 2 criteria can be achieved by first comparing by the main criteria,
//  if the 2 items are different (the result of the compare is not 0) - return the result as 
//  the result of the comparing function. If the two items are the same by the main criteria 
//  (the result of the comparison is 0), we need to compare by the second criteria and the 
//  result of that comparison is the result of the comparing function
