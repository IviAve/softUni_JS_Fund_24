function arrayRotation (array,num){

    for (let rotEl = 0; rotEl < num; rotEl++) {
        let element = array.shift();
        array.push(element);

    }
    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)

// Write a function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.
// Output
// Print the resulting array elements separated by a single space.
