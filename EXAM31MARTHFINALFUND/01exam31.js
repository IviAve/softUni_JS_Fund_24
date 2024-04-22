function solve(array) {

    let text = array.shift();

    let command = array.shift();

    while (command !== 'Done') {

        let tokens = command.split(' ');
        let action = tokens.shift();

        switch (action) {

            case 'Change':

            let [char,replasement] =tokens;
            if (text.includes(char)) {
                while (text.includes(char)) {
                    text = text.replace(char, replasement);
                }

            }
            console.log(text);
                break;
            case 'Includes':

            let substring = tokens;
            if (text.includes(substring)) {
                console.log('True');
            }else{
                console.log('False');
            }
                break;

            case 'End':
                let substr = tokens;
                if (text.endsWith(substr)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;

            case 'Uppercase':
                let upperString = text.toUpperCase();
                text = upperString;
                console.log(text);
                break;

            case 'FindIndex':

            let charToFind = tokens;

let index = text.indexOf(charToFind);
console.log(index);
                break;

                case 'Cut':

                let [startIdx,count] = tokens;
                if (!isNaN(startIdx) && !isNaN(count)) {
                    let result = text.substr(startIdx, count);
                    console.log(result);
                }
                break;
        }



        command = array.shift();
    }
    

}

solve((["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"])
)
solve((["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"])
)

// Create a program that executes changes over a string. On the first line,
// you are going to receive the string. On the following lines,
// you will be receiving commands until the "Done" command.
// There are six possible commands:

// •	"Change {char} {replacement}"
// o	Replace all occurrences of the char with the given replacement,
// then print the string.

// •	"Includes {substring}"
// o	Check if the string includes the given substring with and print "True" or "False".

// •	"End {substring}"
// o	Check if the string ends with the given substring and print "True" or "False".

// •	"Uppercase"
// o	Make the whole string uppercased, then print it.

// •	"FindIndex {char}"
// o	Find the index of the first occurrence of the given char, then print it.

// •	"Cut {startIndex} {count}"
// o	Remove all characters from the string, except those starting from
// the given start index and the next count of characters. Print only the cut chars.

// Input
// •	On the first line, you are going to receive the string.
// •	On the following lines, until the "Done" command is received, you will be receiving commands.
// •	All commands are case-sensitive.
// •	The input will always be valid.
// Output
// •	Print the output of every command in the format described above.
