function winningTicket(input) {
    
    let arr = input.split(/\s*\s*/).join('').split(',').join(' ');
    let pattern = /(\@{6,10}|\${6,10}|\^{6,10}|\#{6,10})/g;
    let newArr = arr.split(' ');
    for (let reg of newArr) {
        if (reg.length !== 20) {
 
            console.log(`invalid ticket`)
 
        } else {
 
            let left = reg.toString().substring(0, reg.length/2).match(pattern);
            let right = reg.toString().substring(reg.length/2).match(pattern);
 
 
            if (left == null || right == null) {
 
                console.log(`ticket "${reg}" - no match`);
 
            }
 
            if (left !== null && right !== null) {
 
                    left = left.toString();
                    right = right.toString();
 
                    if (left.length == 10 && right.length == 10) {
                        console.log(`ticket "${reg}" - ${left.length}${left[0]} Jackpot!`)
                    }
                    else if( right[0] == left[0]){
                        if(left.length < right.length){
                        console.log(`ticket "${reg}" - ${left.length}${left[0]}`)
                        }
                        if(right.length < left.length){
                            console.log(`ticket "${reg}" - ${right.length}${right[0]}`)
                        }
                        if(right.length == left.length){
                            console.log(`ticket "${reg}" - ${left.length}${left[0]}`)
 
                        }
                    }else{
                        console.log(`invalid ticket`)
                    }
 
            }
        }
    }
}

winningTicket('Cash$$$$$$Ca$$$$$$sh')
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey')
winningTicket('validticketnomatch:(')


// The lottery is exciting. What is not, is checking a million tickets for winnings only by hand.
//  So, you are given the task to create a program, which automatically checks if a ticket is a winner. 
// You are given a collection of tickets separated by commas and spaces. 
// You need to check every one of them if it has a winning combination of symbols.
// A valid ticket should have exactly 20 characters. The winning symbols
//  are '@', '#', '$' and '^'. But for a ticket to be a winner, the symbol 
//  should uninterruptedly repeat at least 6 times in both the tickets 
//  left half and the tickets right half. 
// For example, a valid winning ticket should be something like this: 
// "Cash$$$$$$Ca$$$$$$sh" 
// The left half "Cash$$$$$$" contains "$$$$$$", which is also contained in
//  the tickets right half "Ca$$$$$$sh". A winning ticket should contain symbols
//   repeating up to 10 times in both halves,
//    which is considered a Jackpot (for example: "$$$$$$$$$$$$$$$$$$$$").
// Input
// The input will be read from the console. 
// The input consists of a single line containing 
// all tickets separated by commas and one or more white spaces in the format:
// •	"{ticket}, {ticket}, … {ticket}"
// Output
// Print the result for every ticket in the order of their appearance, each on a separate line in the format:
// •	Invalid ticket - "invalid ticket"
// •	No match - "ticket "{ticket}" - no match"
// •	Match with length 6 to 9 - "ticket "{ticket}" - {match length}{match symbol}"
// •	Match with length 10 - "ticket "{ticket}" - {match length}{match symbol} Jackpot!"
// Constrains
// •	The number of tickets will be in the range [0 … 100]
