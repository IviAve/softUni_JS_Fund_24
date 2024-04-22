function passwordReset(array) {

    let text = array.shift();

    let command = array.shift();


    while (command !== 'Done') {

        let tokens = command.split(' ');
        let action = tokens.shift();

        switch (action) {

            case 'TakeOdd':
                let newPassword = '';

                for (let i = 0; i < text.length; i++) {
                    let charIdx = [i];
                    let char = text[i];

                    if (charIdx % 2 !== 0) {
                        newPassword += char;
                    }


                }
                text = newPassword;

                console.log(text);

                break;
            case 'Cut':
                let idx = Number(tokens.shift());
                let num = Number(tokens.shift());

                let tempPass = text.substring(idx, idx + num)
                text = text.replace(tempPass, '');

                console.log(text);

                break;
            case 'Substitute':

                let substring = tokens.shift();
                let substitute = tokens.shift();

                if (text.includes(substring)) {
                    while (text.includes(substring)) {
                        text = text.replace(substring, substitute);
                    }
                    // newPassword = newPassword.replace(new RegExp(substring ,'g'), substitute); //edge reg 
                    console.log(text);
                } else {
                    console.log('Nothing to replace!');
                }


                break;
        }



        command = array.shift();
    }
    console.log(`Your password is: ${text}`);

}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
)
passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
)


// Write a password reset program that performs a series of commands upon a predefined string.
// First, you will receive a string, and afterward, until the command "Done" is given,
//  you will be receiving strings with commands split by a single space.
//The commands will be the following:
// •	"TakeOdd"
// o	 Takes only the characters at odd indices and concatenates
//them to obtain the new raw password and then prints it.
// •	"Cut {index} {length}"
// o	Gets the substring with the given length starting from the given index from the
// password and removes its first occurrence, then prints the password on the console.
// o	The given index and the length will always be valid.
// •	"Substitute {substring} {substitute}"
// o	If the raw password contains the given substring, replace all of its
// occurrences with the substitute text given and print the result.
// o	If it doesn't, prints "Nothing to replace!".
// Input
// •	You will be receiving strings until the "Done" command is given.
// Output
// •	After the "Done" command is received, print:
// o	"Your password is: {password}"
// Constraints
// •	The indexes from the "Cut {index} {length}" command will always be valid.

