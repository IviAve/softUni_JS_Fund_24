function worldTour(array) {

    let countries = array.shift();
    let command = array.shift();

    while (command !== 'Travel') {
        let tokens = command.split(':');
        let action = tokens[0];

        if (action === 'Add Stop') {
            let idx = Number(tokens[1]);
            let string = tokens[2];

            if (idx >= 0 && idx <= countries.length) {
                countries = countries.slice(0, idx) + string + countries.slice(idx);
            }
            console.log(`${countries}`);

        }

        else if (action === 'Remove Stop') {

            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (startIndex >= 0 && startIndex < countries.length && endIndex >= startIndex && endIndex < countries.length) {
                countries = countries.slice(0, startIndex) + countries.slice(endIndex + 1);
            }

            console.log(`${countries}`);

        } else if (action === 'Switch') {

            let oldString = tokens[1];
            let newString = tokens[2];

            if (countries.includes(oldString)) {
                countries = countries.split(oldString).join(newString);
            }
            console.log(`${countries}`);

        }

        command = array.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${countries}`);

}

worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
)
worldTour((['Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel'
]))



// On the first line, you will be given a string containing all of your stops.
// Until you receive the command "Travel", you will be given some commands
// to manipulate that initial string. The commands can be:
// •	"Add Stop:{index}:{string}":
// o	Insert the given string at that index only if the index is valid
// •	"Remove Stop:{start_index}:{end_index}":
// o	Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
// •	"Switch:{old_string}:{new_string}":
// o	If the old string is in the initial string, replace it with the new one (all occurrences)
// Note: After each command, print the current state of the string
// After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}"
// Input / Constraints
// •	JavaScript: you will receive a list of strings
// •	An index is valid if it is between the first and the last element index (inclusive) in the sequence.
// Output
// •	Print the proper output messages in the proper cases as described in the problem description
