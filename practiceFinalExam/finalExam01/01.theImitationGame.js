function theImitationGame(input) {

    let message = input.shift();
    let command = input.shift();
    let tempMsg = '';


    while (command !== 'Decode') {
        let tokens = command.split('|');
        let action = tokens[0];
        switch (action) {

            case 'Move':
                let numToMove = tokens[1];
                tempMsg = message.split('');
                let moved = tempMsg.splice(0, numToMove);
                moved.forEach(element => tempMsg.push(element));
                message = tempMsg.join('');


                break;
            case 'ChangeAll':
                let substring = tokens[1];
                let replsmnt = tokens[2];
                tempMsg = message.split('');
                while (tempMsg.includes(substring)) {
                    let idx = tempMsg.indexOf(substring);

                    tempMsg.splice(idx, 1, replsmnt);
                    message = tempMsg.join('');



                }

                break;
            case 'Insert':
                let idx = tokens[1];
                let value = tokens[2];
                tempMsg = message.split('');
                tempMsg.splice(idx, 0, value);
                message = tempMsg.join('');


                break;
        }


        command = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}


theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
)
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]
)
theImitationGame(['aaaaaaaaaaaaaaaa',
    'ChangeAll|a|b',
    'Insert|0|abc',
    'Move|3',
    'Decode'])


// On the first line of the input you will receive the encrypted message.
// After that, until the "Decode" command is given, you will be receiving strings
//  with instructions for different operations that need to be performed upon the
//   concealed message to interpret it and reveal its true content.
//   There are several types of instructions, split by '|'
// •	Move {number of letters}
// o	Moves the first n letters to the back of the string.
// •	Insert {index} {value}
// o	Inserts the given value before the given index in the string.
// •	ChangeAll {substring} {replacement}
// o	Changes all occurrences of the given substring with the replacement text.
// Input / Constraints
// •	On the first line, you will receive a string with message.
// •	On the next lines, you will be receiving commands, split by '|' .
// Output
// •	After the "Decode" command is received, print this message:
// "The decrypted message is: {message}"
