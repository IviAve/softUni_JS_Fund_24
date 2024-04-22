function printDNA(n) {
    let arr = 'ATCGTTAGGG'.split('')
    for(let i = 1; i <= n; i++){
        let [a, b] = arr.splice(0,2)
        if(i === 1 || i % 4 === 1){
            console.log(`**${a}${b}**`);
        }
        else if(i === 2 || i % 4 === 2){
            console.log(`*${a}--${b}*`);
        }
        else if(i === 3 || i % 4 === 3){
            console.log(`${a}----${b}`);
        }
        else if(i === 4 || i % 4 === 0){
            console.log(`*${a}--${b}*`);
        }
 
        arr.push(a)
        arr.push(b)
    }
}

printDNA(4)
printDNA(10)

// Write a JS program that prints a DNA helix with a length, specified by the user.
//  The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG.
//   See the examples for more information.
// The input comes as a single number. It represents the length of the required helix.
// The output is the completed structure, printed on the console.
