function mergeArrays(array1, array2) {

    //let mergeElem = 0;


    let newArr = [];

    for (let i = 0; i < array1.length; i++) {
        let element1 = array1[i];
        let element2 = array2[i];

        if (i % 2 === 0) {
            //mergeElem = Number(element1) + Number(element2);
            newArr.push(Number(element1) + Number(element2));
        } else {
            //mergeElem = element1 + element2;
            newArr.push(element1 + element2);

        }
        //newArr.push(mergeElem)
    }
    console.log(newArr.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])

mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44'])



// Write a function, which receives two string arrays and merges them into a third array.
// •	If the index of the element is even, add into the third array the sum of both elements at that index
// •	If the index of the element is odd, add the concatenation of both elements at that index
// Input
// As input, you will receive two string arrays(with equal length).
// Output
// As output, you should print the resulting third array, each element separated by " - ".
