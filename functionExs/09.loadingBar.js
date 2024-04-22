function loadingBar(number) {
    let percents = '%'.repeat(number / 10);
    let dots = '.'.repeat(10 - number / 10);
    if (number === 100) {
        console.log(`${number}% Complete!`);
        console.log(`[${percents}]`);
    } else {
        console.log(`${number}% [${percents}${dots}]`);
        console.log(`Still loading...`);
    }

    
}

loadingBar(30)

loadingBar(50)

loadingBar(100)

// You will receive a single number between 0 and 100, 
// which is divided with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualizes a loading bar
//  depending on the number you have received in the input.
