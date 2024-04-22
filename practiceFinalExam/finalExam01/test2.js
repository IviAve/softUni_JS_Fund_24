function theFinalQuest(arr) {
    let words = arr.shift().split(' ');
    let command = arr.shift();
 
    while (command !== 'Stop') {
        let tokens = command.split(' ');
        let action = tokens.shift();
 
        if (action === 'Delete') {
            let deletedIdx = Number(tokens.shift());
 
            if (deletedIdx >= 0 && deletedIdx < words.length) {
                words.splice(deletedIdx + 1, 1);
            }
 
        } else if (action === 'Swap') {
            let word1 = tokens[0];
            let word2 = tokens[1];
 
            if (words.includes(word1) && words.includes(word2)) {
                let idx1 = words.indexOf(word1);
                let idx2 = words.indexOf(word2);
                [words[idx1], words[idx2]] = [words[idx2], words[idx1]];
            }
 
        } else if (action === 'Put') {
            let word = tokens.shift();
            let idx = tokens.shift();
 
            if (idx - 1>= 0 && idx < words.length) {
                words.splice(idx - 1, 0, word);
            } else {
                words.push(word);
            }
        } else if (action === 'Sort') {
            words.sort((a, b) => b.localeCompare(a));
 
        } else if (action === 'Replace') {
            let [word1, word2] = tokens;
            let idx = words.indexOf(word2);
            if (idx !== -1) {
                
                words[idx] = word1;
 
            }
        }
        command = arr.shift();
    }
 
    console.log(`${words.join(' ')}`);
}

theFinalQuest((["Congratulations! You last also through the have challenge!",
"Swap have last",
"Replace made have",
"Delete 2",
"Put it 4",
"Stop"])
)
theFinalQuest((["Please, follow the instructions!",
"Put You 0",
"Delete 3",
"Replace me you",
"Replace follow know",
"Stop"])
)

// Create a program that follows the given instructions. You will receive a 
// sequence of words on a single line, separated by a single space. They are not correct,
//  so you have to follow the instructions to find the actual message. You will be receiving commands. Here are the possible ones:
// •	"Delete {index}":
// o	Remove the word after the given index if the word exists (if its index is valid).
// o	Otherwise, skip the command.
// •	"Swap {word1} {word2}":
// o	Find the given words in the collection if they exist and swap their places.
// o	Otherwise, skip the command.
// •	"Put {word} {index}":
// o	Put the word at the index before the given one (index - 1) if the resulting index is valid. 
// o	If the word's index is out of range, skip the command.
// o	Exception: If the given index is equal to the length of the list, you should put the word at the end of the list.
// •	"Sort":
// o	You should sort the words in descending order.
// •	"Replace {word1} {word2}":
// o	Find the second word in the collection (if it exists) and replace it with the first given word.
// o	Otherwise, skip the command.
// Follow them until you receive the "Stop" command. After successfully following the 
// instructions, you must print the words on a single line, separated by a single space.
// Input
// •	On the 1st line, you are going to receive the collection of words, split by a single space.
// •	On the following lines, you are going to receive commands until you receive the "Stop" command.
// Output
// •	Print the words you have gathered on a single line, split by a single space.
