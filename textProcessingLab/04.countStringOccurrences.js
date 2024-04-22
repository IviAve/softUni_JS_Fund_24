function countStringOccurrences(text,searchedWord) {
    
    let words = text.split(' ');

    let count = 0;
    for (const word of words) {
        
        if (searchedWord === word) {
            count++;
        }
    }
    console.log(count);
}

countStringOccurrences('This is a word and it also is a sentence',
'is'
)
countStringOccurrences('softuni is great place for learning new programming languages',
'softuni'
)


// Write a function that receives a text and a single word that you need to search.
//  Print the number of all occurrences of this word in the text.