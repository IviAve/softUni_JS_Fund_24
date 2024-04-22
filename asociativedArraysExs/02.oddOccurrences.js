function oddOccurrences(string) {

    let result = {};
    let allWords = string.split(' ').map(w => w.toLowerCase());

    for (let word of allWords) {

        if (result[word] == undefined) {
            result[word] = 1;

        } else {
            result[word]++;
        }

    }

    let object = '';
    for (let el of allWords) {
        //console.log(el);
        if (result[el] % 2 === 1) {
            object += `${el} `;
            delete result[el];

        }
    }
    console.log(object);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')


// Write a function that extracts the elements of a sentence,
// if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.
