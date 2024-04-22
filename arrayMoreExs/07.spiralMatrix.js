function spiralMatrix (rows,columns) {
    let spiral = [];
    let count = 1;
    for (let i = 0; i<rows; i++) {
        spiral [i] = [];
        for (let j = 0; j < columns; j++){
            spiral[i][j] = 0;
        }
    }
    let topBorder = 0;
    let rightBorder = columns - 1;
    let bottomBorder = rows - 1;
    let leftBorder = 0; 
    while (true) {
        for (let index = leftBorder; index<=rightBorder; index++){
            spiral[topBorder][index] = count++;
        }
        topBorder++;
        for (let index = topBorder; index<=bottomBorder; index++) {
            if (spiral[index][rightBorder] == 0) spiral[index][rightBorder] = count++;
        }
        rightBorder--;
        for (let index = rightBorder; index >= leftBorder; index--){
            if (spiral[bottomBorder][index] == 0) spiral[bottomBorder][index] = count++;
        }
        bottomBorder--;
        for (let index = bottomBorder; index >= topBorder; index--){
            if (spiral[index][leftBorder] == 0) spiral[index][leftBorder] = count++;
        }
        leftBorder++;
        if (count > rows*columns) break;
    } 
    for (let index=0; index<rows; index++){
        console.log(spiral[index].join(' '));
    }
}

spiralMatrix (5, 5);
spiralMatrix (3, 3);

// Write a function that generates a Spirally filled matrix with numbers,
//  with given dimensions.
// Input
// The input comes as 2 numbers that represent the dimension of the matrix. 
// Output
// The output is the matrix filled spirally starting from 1.
//  You need to print every row on a new line, with the cells
//   separated by a space. Check the examples below

