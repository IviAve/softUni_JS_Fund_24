function triplesOfLatinLetters(numInString) {

    for (let i = 0; i < numInString; i++) {
        for (let j = 0; j < numInString; j++) {
            for (let k = 0; k < numInString; k++) {

                let letter1 = String.fromCharCode(97 + i);
                let letter2 = String.fromCharCode(97 + j);
                let letter3 = String.fromCharCode(97 + k);
                console.log(`${letter1}${letter2}${letter3}`);

            }

        }

    }
}

// triplesOfLatinLetters('3')
triplesOfLatinLetters('2')

// Write a program that receives a string of number n and print
// all triples of the first n small Latin letters, ordered alphabetically:
// Hints
// Perform 3 nested loops from 0 to n.
// For each number num print its corresponding Latin letter as follows:
// let letter = String.fromCharCode(97+num);
// The function String.fromCharCode() gets the value in decimal
// and transforms it to a character from the ASCII table. 
