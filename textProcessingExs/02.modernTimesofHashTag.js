function modernTimesofHashTag(input) {
    
    let sentense = input.split(' ');

    let hashtags = sentense.filter(word => word.startsWith ('#') && word.length > 1);

    for (const word of hashtags) {
        
        let specialWord = word.slice(1);

        let  pattern = /\b[A-Za-z]+\b/;
        if (pattern.test(specialWord)) {
            console.log(specialWord);
        }
        
    }

    //let sentense = input.split(' ');
    // for (const word of sentense) {
        
    //     if (word.startsWith('#') && word.length > 1 ) {
            
    //         let flag = true;
    //         let lowerWord = word.toLowerCase();

    //         for (let i = 1; i < lowerWord.length; i++) {
    //             if (lowerWord.charCodeAt(i)< 97 || lowerWord.charCodeAt(i) > 122) {
    //                 flag = false;
    //                 break;
    //             }
                
    //         }

    //         if(flag){
    //             console.log(word.slice(1));
    //         }
    //     }
    // }
}

modernTimesofHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernTimesofHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')

// The input will be a single string.
// Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed. 
// Finally, print out all the special words you found without the label (#) on a new line.
