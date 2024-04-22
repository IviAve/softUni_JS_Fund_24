function deserializeString(input) {
    const reconstructedString = [];

    for (const line of input) {
        if (line === 'end') {
            break;
        }

        const [char, indexesStr] = line.split(':');
        const indexes = indexesStr.split('/').map(index => parseInt(index));

        for (const index of indexes) {
            reconstructedString[index] = char;
        }
    }

    console.log(reconstructedString.join(''));
}

deserializeString(['a:0/2/4/6',
'b:1/3/5',
'end']
)
deserializeString(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']
)


// Write a function, which takes the output from the previous task and turns it back into a string.
// Until you receive the line “end”, you will receive several lines of input on the console, 
// in the following format:
// •	"{letter}:{index1}/{index2}/{index…}/{indexN}"
// Your task is to take every letter and its index and form a string out of them.
