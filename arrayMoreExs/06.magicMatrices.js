function magicMatrices(arr) {

  let sumRow = arr.map((col => col.reduce((a, b) => a + b)));

  let sumCol = arr.reduce((r, a) => r.map((b, i) => a[i] + b));

  let allEqual = array => array.every(v => v === array[0]);

  let result = allEqual(sumRow) && allEqual(sumRow) && sumRow.toString() === sumCol.toString();

  console.log(result);
}




magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)

magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
)

magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
)




// Write a function that checks if a given matrix of numbers is magical.
// A matrix is magical if the sums of the cells of every row and every column are equal.
// Input
// The input comes as an array of arrays, containing numbers (number 2D matrix).
// The input numbers will always be positive.
// Output
// The output is a Boolean result indicating whether the matrix is magical or not.
