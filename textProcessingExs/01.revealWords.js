function revealWords(word,sentense) {
    
    let wordToReveal = word.split(', ');
    let sentenceArr = sentense.split(' ');

    for (let words of wordToReveal) {
        for (let word of sentenceArr) {
            
            if (word.includes('*') && word.length === words.length) {
                sentense = sentense.replace(word,words);

            }
        }
    }
console.log(sentense);
}

revealWords('great',
'softuni is ***** place for learning new programming languages'
)
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)


// Write a function, which receives two parameters. 
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.
