function rotateArray(array) {   
    let count = array.pop();
    let numRotacions = Number(count);
    let rotacions= numRotacions % array.length;
    //console.log(rotacions);
    for (let i = 0; i < rotacions; i++) {
        
         element = array.pop();
        array .unshift(element);
        
        
    }
    
    console.log(array.join(' '));
}

//rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])

// Write a function that rotates an array. The array should be rotated to the right side,
//  meaning that the last element should become the first, upon rotation.
// The input comes as an array of strings.
// The last element of the array is the amount of rotation you need to perform.
// The output is the resulting array after the rotations.
// The elements should be printed on one line, separated by a single space.
