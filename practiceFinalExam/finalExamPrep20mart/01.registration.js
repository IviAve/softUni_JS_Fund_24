function registration(array) {

    let username = array.shift();

    let command = array.shift();

    while (command !== 'Registration') {

        let tokens = command.split(' ');
        let action = tokens.shift();


        switch (action) {
            case 'Letters':

                let str = tokens.shift();
                let tempString = username.substring(0);

                if (str === 'Lower') {


                    let lowerStr = tempString.toLowerCase();

                    username = username.replace(tempString, lowerStr)

                    console.log(username);
                } else {
                    let upperStr = tempString.toUpperCase();

                    username = username.replace(tempString, upperStr)

                    console.log(username);

                }

                break;

            case 'Reverse':
                let startIdx = Number(tokens.shift());
                let endIdx = Number(tokens.shift());

                if ((startIdx >= 0 && startIdx < username.length && endIdx >= startIdx && endIdx < username.length)) {

                    let tempStr = username.substring(startIdx, endIdx + 1)
                    let reversed = tempStr.split('').reverse().join('');
                    console.log(reversed);
                }


                break;

            case 'Substring':
                let substring = tokens.shift();

                if (username.includes(substring)) {
                    let tempStr = username.substring(substring);
                    username = username.replace(substring,'');
                    
                    console.log(username);
                }else{
                    console.log(`The username ${username} doesn't contain ${substring}.`)
                }
                break;

            case 'Replace':

            let char = tokens.shift();

            if (username.includes(char)) {
                while (username.includes(char)) {
                    username = username.replace(char,'-');

                }

            }
                console.log(username);

                break;

            case 'IsValid':

            let validChar = tokens.shift();
            if (username.includes(validChar)) {
                console.log('Valid username.');

            }else{
                console.log(`${validChar} must be contained in your username.`);
            }

                break;


        }


        command = array.shift();
    }
}

registration(['John',
    'Letters Lower',
    'Substring SA',
    'IsValid @',
    'Registration'
])

registration(['ThisIsSoftUni',
    'Reverse 1 3',
    'Replace S',
    'Substring hi',
    'Registration'
])

// On the first line, you will receive the username that he wants to use in the first place.
//  On the following lines, you will be receiving commands until the "Registration" command.
//   There are five possible commands:

// •	"Letters {Lower/Upper}"
// o	Replace all letters with lower case or with upper case, then print the result.

// •	"Reverse {startIndex} {endIndex}"
// o	Reverse the substring from the start index until the end index (both inclusive),
//  then print it. Do NOT change it in the username.
// Note: Check if the indices are valid. If they aren't - skip the command. An index is
// valid when it is non-negative and less than the size of the collection.

// •	"Substring {substring}"
// o	If the username contains the given substring, cut it out and print the result without the cut substring.
// o	Otherwise, print:
// "The username {string} doesn't contain {substring}."

// •	"Replace {char}"
// o	Replace all occurences of the given char with a dash (-) and print the result.

// •	"IsValid {char}"
// o	For a username to be valid, it must contain the given char. If it is, print "Valid username.".
// o	Otherwise, print: "{char} must be contained in your username."
// Input
// •	On the first line, you are going to receive the string.
// •	On the following lines, until the "Registration" command is received, you will be receiving commands.
// •	All commands are case-sensitive.
// Output
// •	Print the output of every command in the format described above.
