function treasureFinder(input) {
    
    const keySequence = input.shift().split(' ').map(Number);

    for (const line of input) {
        if (line === 'find') {
            break;
        }

        let decrypted = '';
        for (let i = 0; i < line.length; i++) {
            const keyIndex = i % keySequence.length;
            const decryptedCharCode = line.charCodeAt(i) - keySequence[keyIndex];
            decrypted += String.fromCharCode(decryptedCharCode);
        }

        const treasureTypeRegex = /&([^&]+)&/g;
        const coordinatesRegex = /<([^>]+)>/g;
        const treasureTypeMatch = treasureTypeRegex.exec(decrypted);
        const coordinatesMatch = coordinatesRegex.exec(decrypted);

        if (treasureTypeMatch && coordinatesMatch) {
            const treasureType = treasureTypeMatch[1];
            const coordinates = coordinatesMatch[1];
            console.log(`Found ${treasureType} at ${coordinates}`);
        }
    }
}

treasureFinder(["1 2 1 3",
"ikegfp'jpne)bv=41P83X@",
"ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
"find"]
)
treasureFinder(["1 4 2 5 3 2 1",
`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
"tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
"'stj)>34W68Z@",
"find"]
)


// Write a function that decrypts a message by a given key and gathers information 
// about the hidden treasure type and its coordinates. On the first line,
//  you will receive a key (sequence of numbers). 
// On the next few lines until you receive "find" you will get lines of strings. 
// You have to loop through every string and decrease the ASCII code of each 
// character with a corresponding number of the key sequence. 
// The way you choose a key number from the sequence is by just looping through it. 
// If the length of the key sequence is less than the string sequence,
//  you start looping from the beginning of the key. For more clarification see the example below. 
//  After decrypting the message, you will get a type of treasure and its coordinates. 
//  The type will be between the symbol '&' and the coordinates will be between the symbols '<' and '>'.
//   For each line, print the type and the coordinates in the format:
//                `Found {type} at {coordinates}`
