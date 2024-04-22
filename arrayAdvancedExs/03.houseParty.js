function houseParty(array) {

    let guestArr = [];

    for (let element of array) {

        let command = element.split(' ');
        let name = command[0];

        if (command.length === 3) {
            if (guestArr.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestArr.push(name);

            }
        } else {
            if (!guestArr.includes(name)) {
                console.log(`${name} is not in the list!`);
            }else{
                let index = guestArr.indexOf(name);
                guestArr.splice(index,1)
            }
        }
    }
    console.log(guestArr.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
)


// Write a function that keeps track of guests that are going to a house party.
// You will be given an array of strings. Each string will be one of the following:
// -	"{name} is going!"
// -	"{name} is not going!"
// If you receive the first type of input, you have to add the person if he/she is not in the list
//  (If he/she is in the list print: "{name} is already in the list!").
// If you receive the second type of input, you have to remove the person if he/she
//  is in the list (if not print: "{name} is not in the list!").
// At the end print all the guests each on a separate line.
