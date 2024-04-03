function commonElements(array1, array2) {

    // for (let i = 0; i < array1.length; i++) {
    //     let str = array1[i];
    //     if (array2.includes(str)) {
    //         console.log(str);
    //     }
    // }

    for (let str of array1) {
        if (array2.includes(str)) {
            console.log(str);
        }
    }
}


commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])



// Write a function, which prints common elements in two string arrays.
//  Print all matches on separate lines. Compare the first array with the second array.