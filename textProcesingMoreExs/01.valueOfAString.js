function valueOfAString(input) {
    const str = input[0];
    const mode = input[1];

    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if ((mode === 'UPPERCASE' && str[i] >= 'A' && str[i] <= 'Z') ||
            (mode === 'LOWERCASE' && str[i] >= 'a' && str[i] <= 'z')) {
            sum += charCode;
        }
    }

    console.log(`The total sum is: ${sum}`);
}

valueOfAString(['HelloFromMyAwesomePROGRAM',
'LOWERCASE']
)
valueOfAString(['AC/DC',
'UPPERCASE']
)

// Write a function, which finds the sum of the ASCII codes of the letters in a given string. 
//  Your tasks will be a bit harder because you will have to find the sum of either the lowercase
//   or the uppercase letters.
// On the first line, you will receive the string.
// On the second line, you will receive one of two possible inputs:
// •	If you receive "UPPERCASE"  find the sum of all uppercase English letters in the previously
//  received string
// •	If you receive "LOWERCASE"  find the sum of all lowercase English letters in the previously 
// received string
// You should not sum the ASCII codes of any characters, which are not letters.
// At the end print the sum in the following format:
// •	The total sum is: {sum}


