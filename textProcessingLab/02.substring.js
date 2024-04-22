function substring(string,startIdx,count) {
    
    let endIdx = count + startIdx;
    console.log(string.substring(startIdx,endIdx));
}

substring('ASentence', 1, 8)
substring('SkipWord', 4, 7)

// Write a function that receives a string and two numbers. 
// The numbers will be a starting index and count of elements to substring.
//  Print the result.