function activationKeys(array) {
    let activationCode = array.shift();

    let command = array.shift();

    while (command !== 'Generate') {

        let tokens = command.split('>>>');
        let action = tokens.shift();


        switch (action) {
            case 'Contains':
                let substring = tokens.shift();

                if (activationCode.includes(substring)) {
                    console.log(`${activationCode} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            case 'Flip':
                let subCommand = tokens.shift();
                let startIdx = tokens.shift();
                let endIdx = tokens.shift();

                let tempString = activationCode.substring(startIdx, endIdx)
                if (subCommand === 'Upper') {
                    let upperString = tempString.toUpperCase();

                    activationCode = activationCode.replace(tempString, upperString)
                } else {
                    let lowerString = tempString.toLowerCase();

                    activationCode = activationCode.replace(tempString, lowerString)
                }

                console.log(`${activationCode}`);
                break;
            case 'Slice':
                let start = tokens.shift();
                let end = tokens.shift();
                let tempStr = activationCode.substring(start, end);
                activationCode = activationCode.replace(tempStr, '');

                console.log(`${activationCode}`);
                break;

        }
        command = array.shift();
    }

    console.log(`Your activation key is: ${activationCode}`);
}

activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
)
// activationKeys((["134softsf5ftuni2020rockz42",
// "Slice>>>3>>>7",
// "Contains>>>-rock",
// "Contains>>>-uni-",
// "Contains>>>-rocks",
// "Flip>>>Upper>>>2>>>8",
// "Flip>>>Lower>>>5>>>11",
// "Generate"])
// )


// The first line of the input will be your raw activation key. It will consist of letters and numbers only.
// After that, until the "Generate" command is given, you will be receiving strings with
// instructions for different operations that need to be performed upon the raw activation key.
// There are several types of instructions, split by ">>>":
// •	"Contains>>>{substring}":
// o	If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".
// o	Otherwise, prints: "Substring not found!"
// •	"Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
// o	Changes the substring between the given indices (the end index is exclusive)
//  to upper or lower case and then prints the activation key.
// o	All given indexes will be valid.
// •	"Slice>>>{startIndex}>>>{endIndex}":
// o	Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.
// o	Both indices will be valid.
// Input
// •	The first line of the input will be a string consisting of letters and numbers only.
// •	After the first line, until the "Generate" command is given, you will be receiving strings.
// Output
// •	After the "Generate" command is received, print:
// o	"Your activation key is: {activation key}"
