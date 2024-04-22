function piccolo(arr) {
    let parkingList = [];

    for (let i = 0; i < arr.length; i++) {
        let commands = arr[i];
        let [command, numberCar] = commands.split(', ');

        if (command === 'IN') {

            if (!parkingList.includes(numberCar)) {
                parkingList.push(numberCar);
            }

        } else if (command === 'OUT') {
            let removedCarIndex = parkingList.indexOf(numberCar);
            if (removedCarIndex !== -1) {
                parkingList.splice(removedCarIndex, 1);
            }
        }
    }

    parkingList.sort((a, b) => a.localeCompare(b));

    if (parkingList.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        console.log(parkingList.join('\n'));
    }
}




piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA1234TA']
)