function bombNumbers(sequence, bombNumAdPower) {

    let bombNumber = bombNumAdPower[0];
  let bombPower = bombNumAdPower[1];

  while (sequence.includes(bombNumber)) {
    let detect = sequence.indexOf(bombNumber);
    let numsToRemove = bombPower * 2 + 1;
    let startIndexToRemove = detect - bombPower;

    if (startIndexToRemove < 0) {
      numsToRemove += startIndexToRemove;
      startIndexToRemove = 0;
    }
    sequence.splice(startIndexToRemove, numsToRemove);
  }

  console.log(sequence.reduce((a, b) => a + b, 0));
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)

bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
)

bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
)

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    
)

//     Write a function that receives two parameters: sequence of numbers and
//      special bomb number with a certain power.
// Your task is to detonate every occurrence of the special bomb number and according
// to its power his neighbors from left and right. Detonations are performed from
// left to right and all detonated numbers disappear.
// The input contains two arrays of numbers. The first contains the initial
//  sequence and the second contains the special bomb number and its power.
// The output is the sum of the remaining elements in the sequence.
