function charactersInRange(firstchar, lastChar) {

    let startCharCode = Math.min(firstchar.charCodeAt(0), lastChar.charCodeAt(0));
    let endCharCode = Math.max(firstchar.charCodeAt(0), lastChar.charCodeAt(0));
    let buff = '';


    for (let i = startCharCode + 1; i < endCharCode; i++) {
        let character = String.fromCharCode(i);
        buff += character + ' ';
        
    }

    console.log(buff);
    
    
}

charactersInRange('a',
    'd'
)
charactersInRange('#',
    ':'
)

charactersInRange('#',
    'C'
)



// Write a function that receives two characters and prints
// on a single line all the characters in between them according to the ASCII code.
//  Keep in mind that the second character code might be before the first one inside the ASCII table.