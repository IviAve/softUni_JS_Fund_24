function partyTime(array) {

    let vipList = [];
    let regularList = [];

    let currGuest = array.shift();

    while (currGuest !== 'PARTY') {

        let isVip = !isNaN(currGuest[0]);

        if (isVip) {
            vipList.push(currGuest);

        }else{
            regularList.push(currGuest)
        }

        currGuest = array.shift();
    }

    let allGuests = vipList.concat(regularList);

    for (const guest of array) {
        allGuests.splice(allGuests.indexOf(guest),1);

    }
    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest));
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
)


// There is a party at SoftUni. Many guests are invited and they are
// two types: VIP and regular. When guests come to the party check if he/she
//  contains in any of the two reservation lists.
// The input will come as an array of strings. You will be given the list
// with the guests before you receive a command "PARTY".
// All VIP numbers start with a digit.
// When you receive the command "PARTY", the guests start coming.
// Print the count of guests then all guests, who didn't come to the party (VIP must be printed first).
// Hint: Guest names are not unique. Only the first match is removed when receiving a name.
