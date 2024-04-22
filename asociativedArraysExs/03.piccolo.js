function piccolo(input) {

    let parkingList = new Map();

    let fullList = input.map(el => el.split(', '));

    fullList.forEach(element => {

        let command = element[0];
        let carNum = element[1];

        if (command === 'IN') {

            parkingList.set(carNum, command);

        } else if (command === 'OUT') {
            parkingList.delete(carNum);
        }
    });

    let sortedCars = Array.from(parkingList).sort((a, b) => a[0].localeCompare(b[0]));

    if (sortedCars.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        sortedCars.forEach((carsNumber) => console.log(carsNumber[0]));
    }
}




// piccolo(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU']
// )
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA1234TA']
)

// Write a function that:
// •	Records a car number for every car that enters the parking lot
// •	Removes a car number when the car goes out
// •	Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty".
