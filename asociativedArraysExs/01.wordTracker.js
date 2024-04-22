function wordTracker(array) {
    let specialWords = array.shift().split(' ');

    let words = {};

    for (const word of specialWords) {
        words[word] = 0;
    }
    for (let word of array) {
        
        if (words.hasOwnProperty(word)) {
            
            words[word]++;
            
        }
    }
    let sortedWords = Object.entries(words).sort((a,b) => b[1] - a[1]);

    for (const kvp of sortedWords) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}

wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )
wordTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )

//     Write a function that receives an array of words and finds occurrences 
//     of given words in that sentence. 
// The input will come as an array of strings. 
// The first string will contain the words you 
// will be looking for separated by a space. All 
// strings after that will be the words in 
// which you will check for a match.
// Print for each word how many times it occurs. 
// The words should be sorted by count in descending.
