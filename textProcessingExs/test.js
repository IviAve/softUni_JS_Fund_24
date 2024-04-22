function lettersChangeNumbers(string) {
    let words = string.split(' ');
    let sum = 0;

    for (const word of words) {
        if (word !== '') {


            let simbol = word.split('');
            let firstSimbol = simbol.shift();
            let lastSimbol = simbol.pop();
            let number = Number(simbol.join(''));

            let firstNum, lastNum;

            if (/[A-Z]/.test(firstSimbol)) {
                firstNum = firstSimbol.charCodeAt(0) - 64;
                sum += number / firstNum;
            } else if (/[a-z]/.test(firstSimbol)) {
                firstNum = firstSimbol.charCodeAt(0) - 96;
                sum += number * firstNum;
            }

            if (/[A-Z]/.test(lastSimbol)) {
                lastNum = lastSimbol.charCodeAt(0) - 64;
                sum -= lastNum;
            } else if (/[a-z]/.test(lastSimbol)) {
                lastNum = lastSimbol.charCodeAt(0) - 96;
                sum += lastNum;
            }
        }
    }

    console.log(`${sum.toFixed(2)}`);
}

// Example usage:
lettersChangeNumbers('P34562Z q2576f   H456z')