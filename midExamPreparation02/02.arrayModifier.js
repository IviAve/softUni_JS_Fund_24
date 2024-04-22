function arrayModifier(array) {

    let initialValues = array.shift().split(' ').map(Number);

    let command = array.shift();

    while (command !== 'end') {

        let [action, index1, index2] = command.split(' ');
        index1 = Number(index1);
        index2 = Number(index2);


        switch (action) {
            case 'swap':
                // let tempNum2 = Number(initialValues.splice(index2, 1));
                // let tempNum1 =Number(initialValues.splice(index1, 1, tempNum2));
                // initialValues.splice(index2, 0, tempNum1);

                let temp = initialValues[index1];
                initialValues[index1] = initialValues[index2];
                initialValues[index2] = temp;

                break;
            case 'multiply':

            let result = initialValues[index1] * initialValues[index2];
            initialValues[index1] = result;

                break;
            case 'decrease':
                let decreaseNums = initialValues.map(a => a - 1);
                initialValues = decreaseNums;
                break;

        }

        command = array.shift();

    }
    console.log(initialValues.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
)

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
)





// You are given an array with integers. Write a program to modify
//  the elements after receiving the following commands:
// •	"swap {index1} {index2}" takes two elements and swap their places.
// •	"multiply {index1} {index2}" takes element at the 1st index and multiply
// it with the element at 2nd index. Save the product at the 1st index.
// •	"decrease" decreases all elements in the array with 1.
// Input
// On the first input line, you will be given the initial array values separated by a single space.
// On the next lines you will receive commands until you receive the command "end". The commands are as follow:
// •	"swap {index1} {index2}"
// •	"multiply {index1} {index2}"
// •	"decrease"
// Output
// The output should be printed on the console and consist of elements
// of the modified array – separated by a comma and a single space ", ".
// Constraints
// •	Elements of the array will be integer numbers in the range [-231...231]
// •	Count of the array elements will be in the range [2...100]
// •	Indexes will be always in the range of the array
