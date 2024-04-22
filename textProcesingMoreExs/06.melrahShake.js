function melrahShake(input) {
    
    let text = input.shift();
    let pattern = input.shift();
 
    while (pattern.length > 0) {
 
        let firstMatch = text.indexOf(pattern);
        let lastMatch = text.lastIndexOf(pattern);
 
        if ((firstMatch > -1 && lastMatch > -1) && firstMatch !== lastMatch) {
 
            text = text.split('');
            text.splice(firstMatch, pattern.length);
            text = text.join('');
            lastMatch = text.lastIndexOf(pattern);
            text = text.split('')
            text.splice(lastMatch, pattern.length)
            let removeFromPatt = pattern[Math.floor(pattern.length / 2)]
            pattern = pattern.replace(removeFromPatt, '');
            text = text.join('')
 
            console.log('Shaked it.');
        } else {
            break;
        }
    }
    console.log('No shake.');
    console.log(text);
}

melrahShake(['astalavista baby',
'sta'])


melrahShake(['##mtm!!mm.mm*mtm.#',
'mtm']
)


// You are given a string of random characters and a pattern of random characters. 
// You need to “shake off” (remove) all of the border occurrences of that pattern, 
// in other words, the very first match and the very last match of the pattern you find in the string.
// When you successfully shake off a match, you remove from the pattern the character
//  which corresponds to the index equal to the pattern’s length / 2. 
//  Then you continue to shake off the border occurrences of the new
//   pattern until the pattern becomes empty or until there is less than the - needed for a shake, 
//   matches in the remaining string.
// In case you have found at least two matches, and you have successfully shaken them off,
//  you print "Shaked it." on the console. Otherwise, you print "No shake.",
 
//  the remains of the main string, and you end the program. See the examples for more info.
// Input
// •	The input will consist only of two lines.
// •	On the first line, you will get a string of random characters.
// •	On the second line, you will receive the pattern and that ends the input sequence.
// Output
// •	You must print "Shaked it." for every time you successfully do the melrah shake.
// •	If the melrah shake fails, you print "No shake.", and on the next line you 
// print what has remained of the main string.
// Constraints
// •	The two strings may contain ANY ASCII character.
// •	Allowed time/memory: 250ms/16MB.


