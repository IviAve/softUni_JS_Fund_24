function arrayManipulations(array) {

    let newArr = array.shift().split(' ').map(Number);

    for (let command of array) {
        let actions = command.split(' ');
        let move = actions[0];
        let num1 = Number(actions[1]);
        let num2 = Number(actions[2]);

        //let [act,num1,num2] = move.split(' ');


        if (move === 'Add') {
            newArr.push(num1);

        } else if (move === 'Remove') {
            newArr = newArr.filter(n => n !== num1)

        } else if (move === 'RemoveAt') {
            newArr.splice(num1, 1)

        } else if (move === 'Insert') {

            newArr.splice(num2, 0, num1)
        }

    }

    console.log(newArr.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
)


// Write a function that manipulates an array of numbers.
// •	Add {number}: add a number to the end of the array
// •	Remove {number}: remove all occurrences of a particular number from the array
// •	RemoveAt {index}: removes number at a given index
// •	Insert {number} {index}: inserts a number at a given index
// Note: All the indices will be valid!
// The input comes as an array of strings. The first element will be a string
// containing the array to manipulate. Every other command you receive will also be a string.
// The output is the manipulated array printed on the console on a single line, separated by space.
