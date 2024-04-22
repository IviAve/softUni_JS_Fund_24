function shoppingList(array) {

    let listOfShoping = array.shift().split('!');

    let command = array.shift();

    while (command !== 'Go Shopping!') {

        let [action, item1, item2] = command.split(' ');
        switch (action) {
            case 'Urgent':
                if (!listOfShoping.includes(item1)) {

                    listOfShoping.unshift(item1);

                }
                break;
            case 'Unnecessary':
                if (listOfShoping.includes(item1)) {
                    let idx = listOfShoping.indexOf(item1);

                    listOfShoping.splice(idx, 1)

                }
                break;
            case 'Correct':
                if (listOfShoping.includes(item1)) {
                    let idx = listOfShoping.indexOf(item1);

                    listOfShoping.splice(idx, 1, item2);

                }
                break;
            case 'Rearrange':
                if (listOfShoping.includes(item1)) {
                    let idx = listOfShoping.indexOf(item1);
                    let movedItem = listOfShoping.splice(idx, 1);

                    listOfShoping.push(movedItem);
                }
                break;
        }

        command = array.shift();
    }
    console.log(listOfShoping.join(', '));
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])

//console.log("Tomatoes, Potatoes, Bread");
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

// console.log(Milk, Onion, Salt, Water, Banana);


// It's the end of the week, and it is time for you to go shopping,
//so you need to create a shopping list first.
// Input
// You will receive an initial list with groceries separated by an exclamation mark "!".
// After that, you will be receiving 4 types of commands until you receive "Go Shopping!".
// •	"Urgent {item}" - add the item at the start of the list.
//  If the item already exists, skip this command.
// •	"Unnecessary {item}" - remove the item with the given name,
// only if it exists in the list. Otherwise, skip this command.
// •	"Correct {oldItem} {newItem}" - if the item with the given old name exists,
// change its name with the new one. Otherwise, skip this command.
// •	"Rearrange {item}" - if the grocery exists in the list, remove
// it from its current position and add it at the end of the list. Otherwise, skip this command.
// Constraints
// •	There won't be any duplicate items in the initial list
// Output
// •	Print the list with all the groceries, joined by ", ":
// "{firstGrocery}, {secondGrocery}, … {nthGrocery}"
