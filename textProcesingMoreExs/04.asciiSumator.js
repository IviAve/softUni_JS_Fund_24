function asciiSumator(array) {
    
    const firstChar = input[0];
    const secondChar = input[1];
    const string = input[2];

    const start = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    const end = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        const charCode = string.charCodeAt(i);
        if (charCode > start && charCode < end) {
            sum += charCode;
        }
    }

    console.log(sum);
}

asciiSumator(['.',
'@',
'dsg12gr5653feee5']
)
asciiSumator(['?',
'E',
'@ABCEF']
)
asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$']
)


// Write a function that prints a sum of all characters between two given characters (their ASCII code). 
// On the first line, you will get a character. On the second line, you get another character.
//  On the last line, you get a random string. 
//  Find all the characters between the two given and print their ASCII sum.