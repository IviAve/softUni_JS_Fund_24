function censoredWords(text,censWord) {
    
    while(text.includes(censWord)){
text = text.replace(censWord,"*".repeat(censWord.length))
    }
    console.log(text);
}

censoredWords('A small sentence with some words', 'small')
//censoredWords('Find the hidden word', 'hidden')

// Write a function that receives a text as a first parameter 
// and a single word as a second. Find all occurrences of that word
//  in the text and replace them with the corresponding count of '*'.