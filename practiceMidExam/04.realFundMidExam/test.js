function memoryGame(input) {
    let sequence = input.shift().split(' ');
    let step = 0;
    
    for(let command of input) {      
        if(command === "end" ) {
            console.log('Sorry you lose :(');
            console.log(sequence.join(' '));
            break;
        }
 
        let index = command.split(' ').map(Number);
 
        if(index[0] < 0 || index[1] < 0 || index[0] === index[1] || index[0] >= sequence.length || index[1] >= sequence.length) {
            step++;
            sequence.splice(sequence.length/2,0,`-${step}a`,`-${step}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } else if(sequence[index[0]] !== sequence[index[1]]) {
            console.log('Try again!');
        }
 
        if(sequence[index[0]] === sequence[index[1]]) {
            if(index[0] > index[1]) {
            let el = sequence.splice(index[0],1);
            sequence.splice(index[1],1);
            step++;
            console.log(`Congrats! You have found matching elements - ${el}!`); 
        } else {
            el = sequence.splice(index[1],1);
            sequence.splice(index[0],1);
            step++;
            console.log(`Congrats! You have found matching elements - ${el}!`); 
            }
        }
 
        if(sequence.length === 0) {
            console.log(`You have won in ${step} turns!`);
            break;
        } 
        
    }
}


memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    )
memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    )
memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    )