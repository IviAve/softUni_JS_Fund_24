function wordOccurrences(array) {
    
    let words = {};

    for (let word of array) {
        
        if (!words.hasOwnProperty(word)) {
            words[word] = 1;
        }else{
            words[word] += 1;
        }
    }

    let sortedArr = Object.entries(words).sort((a,b) => b[1] - a[1]);

    for (const word of sortedArr) {
        console.log(`${word[0]} -> ${word[1]} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])

// Write a function that counts the times each word occurs in a text.
//  Print the words sorted by count in descending order. 
//  The input comes as an array of strings.