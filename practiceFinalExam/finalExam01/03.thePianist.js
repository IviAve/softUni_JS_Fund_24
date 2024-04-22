function thePianist(array) {

    let objMusics = {};


    let numLines = Number(array.shift());

    for (let i = 0; i < numLines; i++) {
        let melodies = array.shift().split('|');
        let [name, composer, key] = melodies;

        objMusics[name] = { composer, key };

    }

    let command = array.shift();

    while (command !== 'Stop') {
        let tokens = command.split('|');
        let action = tokens.shift();

        switch (action) {
            
            case 'Add':
                let [name, composer, key] = tokens;
                if (name in objMusics) {
                    console.log(`${name} is already in the collection!`);
                } else {
                    objMusics[name] = { composer, key };
                    console.log(`${name} by ${composer} in ${key} added to the collection!`);
                }
                break;

            case 'Remove':
                let  [names]= tokens;
                if (names in objMusics) {
                    
                    console.log(`Successfully removed ${names}!`);
                    delete objMusics[names];

                }else{
                    console.log(`Invalid operation! ${names} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':

           let  [named,newKey] = tokens;

             if (named in objMusics) {
                objMusics[named].key = newKey;
                console.log(`Changed the key of ${named} to ${newKey}!`);

             }else{
console.log(`Invalid operation! ${named} does not exist in the collection.`);
             }
                break;
        }

        command = array.shift();


    }

let entries = Object.entries(objMusics);
entries.forEach(([name,obj]) => console.log(`${name} -> Composer: ${obj.composer}, Key: ${obj.key}`))


}




thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)


// On the first line of the standard input, you will receive an integer n – the number
//  of pieces you will initially have. On the next n lines, the pieces themselves
//  will follow with their composer and key, separated by "|" in the following format: "{piece}|{composer}|{key}".
// Then, you will be receiving different commands, each on a new line, separated by "|", until the "Stop" command is given:
// •	"Add|{piece}|{composer}|{key}":
// o	You need to add the given piece with the information about it to the other pieces and print:
// "{piece} by {composer} in {key} added to the collection!"
// o	If the piece is already in the collection, print:
// "{piece} is already in the collection!"
// •	"Remove|{piece}":
// o	If the piece is in the collection, remove it and print:
// "Successfully removed {piece}!"
// o	Otherwise, print:
// "Invalid operation! {piece} does not exist in the collection."
// •	"ChangeKey|{piece}|{new key}":
// o	If the piece is in the collection, change its key with the given one and print:
// "Changed the key of {piece} to {new key}!"
// o	Otherwise, print:
// "Invalid operation! {piece} does not exist in the collection."
// Upon receiving the "Stop" command, you need to print all pieces in your collection in the following format:
// "{Piece} -> Composer: {composer}, Key: {key}"
// Input/Constraints
// •	You will receive a single integer at first – the initial number of pieces in the collection
// •	For each piece, you will receive a single line of text with information about it.
// •	Then you will receive multiple commands in the way described above until the command "Stop".
// Output
// •	All the output messages with the appropriate formats are described in the problem description.
