function solve(array) {

    let string = array;
 let pattern = /(@+|#+)(?<color>[a-z]{3,})(@+|#+)([^A-Za-z0-9]*)\/+(?<nums>\d+)\/+/g;  

 let isValid = pattern.exec(string);

    while (isValid !== null) {
         let color = isValid.groups.color;
         let nums = isValid.groups.nums;
        console.log(`You found ${nums} ${color} eggs!`);

        isValid = pattern.exec(string);
    }

}

solve((['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']))
solve(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])

// You will be given a text string. To find the hidden eggs and their amount, 
// read them and mark the ones that are valid, considering the following rules:

// •	Eggs' color:
// o	Surrounded by one or more "@" or "#" (they don't have to be the same).
// o	It is written with lower case alphabetical letters only.
// o	Each color should be minimum 3 letters long.
// •	Amount:
// o	Always positioned after the color.
// o	Between the color and the amount there could or could not be any other characters.
//  If there are, they must NOT be alphabetical letters or digits. Otherwise, 
//  the color-amount combination is invalid.
// o	Surrounded by one or more "/".
// o	Contains only digits.
// o	If the color or the amount is not valid, we consider that the color-amount 
// combination is invalid.
// Examples of valid eggs: @red@*/54/, #green##//2//, @@@yellow#@*/%^&/36/, @#blue@*/1//
// Examples of invalid eggs: ##@InvalidColor##/54/, @notc0l0r@*23*, @invalid_color@/notnumber/

// Next, you will have to print all the valid eggs like following:
// "You found {amount} {color} eggs!" for every color-amount combination.
// Examples
// •	You will receive a string.
// •	Print the proper output messages in the proper cases as described in the problem description.
