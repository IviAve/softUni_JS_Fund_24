function memoryGame(array) {

    let board = array.shift().split(' ');
    let command = array.shift();
    let turn = 1;

    while (command !== 'end' && board.length > 0) {

        let [first, second] = command.split(' ').map(Number);

        let areValidIdx = (first < 0 || first >= board.length) || (second < 0 || second >= board.length) || (first === second);

        if (areValidIdx) {

            console.log('Invalid input! Adding additional elements to the board');

            let middleIdx = board.length / 2;
            let fill = `-${turn}a`;
            board.splice(middleIdx, 0, fill, fill);

        } else {

            if (board[first] === board[second]) {

                let element = board[first];

                console.log(`Congrats! You have found matching elements - ${element}!`);
                board = board.filter(x => x !== element);

            }else{
                console.log('Try again!');
            }
        }

        if (board.length === 0) {
            console.log(`You have won in ${turn} turns!`);
        }
        command = array.shift();
        turn++;
    }

    if (board.length > 0) {
        console.log('Sorry you lose :(');
        console.log(board.join(' '));
    }
}


memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])


memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
])


memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
])



//     Write a program that recreates the Memory game.
// On the first line, you will receive a sequence of elements.
// Each element in the sequence will have a twin.
// Until the player receives "end" from the console,
// you will receive strings with two integers separated by a space,
// representing the indexes of elements in the sequence.
// If the player tries to cheat and enters two equal indexes or
//  indexes which are out of bounds of the sequence, you should
//   add two matching elements at the middle of the sequence in the following format:
// "-{number of moves until now}a"
// Then print this message on the console:
// "Invalid input! Adding additional elements to the board"
// Input
// •	On the first line, you will receive a sequence of elements.
// •	On the following lines, you will receive integers until the command "end".
// Output
// •	Every time the player hit two matching elements,
// you should remove them from the sequence and print on the console the following message:
// "Congrats! You have found matching elements - {element}!"
// •	If the player hit two different elements, you should print on the console the following message:
// "Try again!"
// •	If the player hit all matching elements before he receives "end" from the console,
//  you should print on the console the following message:
// "You have won in {number of moves until now} turns!"
// •	If the player receives "end" before he hits all matching elements,
//  you should print on the console the following message:
// "Sorry you lose :(
// {the current sequence's state}"
// Constraints
// •	All elements in the sequence will always have a matching element.
