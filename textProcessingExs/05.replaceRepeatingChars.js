function replaceRepeatingChars(input) {
    let index = 1;
    let end = input.length;
    let text = input[0];
    //'a'
    while (index < end) {
        if (input[index] !== input[index - 1]) {
            text += input[index];
        }
        index++;
    }
    console.log(text);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
replaceRepeatingChars('qqqwerqwecccwd')


// Write a function that receives a 
// single string and replace any sequence
//  of the same letters with a single 
//  corresponding letter.