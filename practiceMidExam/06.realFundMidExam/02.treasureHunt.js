function treasureHunt(array) {

    let treasureChest = array.shift().split('|');

    let command = array.shift();

    while (command !== 'Yohoho!') {

        let tokens = command.split(' ');

        let action = tokens.shift();

        if (action === 'Loot') {


            for (let i = 0; i < tokens.length; i++) {
                let idx = tokens[i];
                if (!treasureChest.includes(idx)) {
                    treasureChest.unshift(idx);

                }

            }

        } else if (action === 'Drop') {
            let idx = Number(tokens.shift());
            if (idx >= 0 && idx < treasureChest.length) {

                let dropItem = treasureChest.splice(idx, 1);
                treasureChest.push(dropItem);
            }
        } else if (action === 'Steal') {
            let steal = [];
            let count = Number(tokens.shift());

            if (treasureChest.length < count) {
                steal = treasureChest.splice(0, count)
            } else {
                for (let i = 0; i < count; i++) {
                    let stealItem = treasureChest.pop();
                    steal.unshift(stealItem);
                }
            }

            console.log(steal.join(', '));

        }

        command = array.shift();
    }

    if (treasureChest.length === 0) {
        console.log('Failed treasure hunt.');
    } else {
        let sumLength = treasureChest.reduce((a, b) => a + b.length, 0);
        let averageSum = sumLength / treasureChest.length;

        console.log(`Average treasure gain: ${averageSum.toFixed(2)} pirate credits.`);
    }

}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])


// Create a program that manages the state of the treasure chest along the way.
//  On the first line, you will receive the initial loot of the treasure chest,
//which is a string of items separated by a "|".
// "{loot1}|{loot2}|{loot3} … {lootn}"
// The following lines represent commands until "Yohoho!" which ends the treasure hunt:
// •	"Loot {item1} {item2}…{itemn}":
// o	Pick up treasure loot along the way. Insert the items at the beginning of the chest.
// o	If an item is already contained, don't insert it.
// •	"Drop {index}":
// o	Remove the loot at the given position and add it at the end of the treasure chest.
// o	If the index is invalid, skip the command.
// •	"Steal {count}":
// o	Someone steals the last count of loot items. If there are fewer items than the given count,
//  remove as many as there are.
// o	Print the stolen items separated by ", ":
// "{item1}, {item2}, {item3} … {itemn}"
// In the end, output the average treasure gain, which is the sum of
//  all treasure items' length divided by the count of all
//items inside the chest formatted to the second decimal point:
// "Average treasure gain: {averageGain} pirate credits."
// If the chest is empty, print the following message:
// "Failed treasure hunt."
// Input
// •	On the 1st line, you are going to receive the initial
//treasure chest (loot separated by "|").
// •	On the following lines, until "Yohoho!", you will be receiving commands.
// Output
// •	Print the output in the format described above.
// Constraints
// •	The loot items will be strings containing any ASCII code.
// •	The indexes will be integers in the range [-200…200]
// •	The count will be an integer in the range [1….100]
