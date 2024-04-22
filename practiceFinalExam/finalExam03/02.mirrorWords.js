function mirrorWords(string) {

    let input = string.shift();

    let validPairs = [];

    let mirrorPairs = [];

    let pattern = /(\#|\@)(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;

    let isvalidPairs = input.matchAll(pattern);
    if (isvalidPairs) {
        validPairs.push(isvalidPairs);
    }
    //console.log(validPairs);


    if (validPairs.length === 0) {
        console.log("No word pairs found!");
        return;
    }


    let count = 0;
    for (let pair of isvalidPairs) {

        let firstWord = pair.groups.word1;
        let secondWord = pair.groups.word2;
        count++;
        let reversedSecondWord = secondWord.split('').reverse().join('');

        if (firstWord === reversedSecondWord && secondWord === firstWord.split('').reverse().join('')) {
            mirrorPairs.push(`${firstWord} <=> ${secondWord}`);

        }
    }
    if (count === 0 ) {
        console.log('No word pairs found!');
    }else{
        console.log(`${count} word pairs found!`);
    }
    
    if (mirrorPairs.length === 0 ) {
        console.log("No mirror words!");
    } else {
        
        console.log("The mirror words are:");
        console.log(mirrorPairs.join(', '));
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])


// On the first line of the input, you will be given a text string.
// To win the competition, you have to find all hidden word pairs, read them,
// and mark the ones that are mirror images of each other.
// First of all, you have to extract the hidden word pairs. Hidden word pairs are:
// •	Surrounded by "@" or "#" (only one of the two)
// in the following pattern #wordOne##wordTwo# or @wordOne@@wordTwo@
// •	At least 3 characters long each (without the surrounding symbols).
// •	Made up of letters only.
// If the second word, spelled backward, is the
// same as the first word and vice versa (casing matters!), they are a match, and you have to store them somewhere.
//  Examples of mirror words:
// #Part##traP# @leveL@@Level@ #sAw##wAs#
// •	If you don`t find any valid pairs, print: "No word pairs found!"
// •	If you find valid pairs print their count: "{valid pairs count} word pairs found!"
// •	If there are no mirror words, print: "No mirror words!"
// •	If there are mirror words print:
// "The mirror words are:
// {wordOne} <=> {wordtwo}, {wordOne} <=> {wordtwo}, … {wordOne} <=> {wordtwo}"
// Input / Constraints
// •	You will recive a string.
// Output
// •	Print the proper output messages in the proper cases as described in the problem description.
// •	If there are pairs of mirror words, print them in the end, each pair separated by ", ".
// •	Each pair of mirror word must be printed with " <=> " between the words.
