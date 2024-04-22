function flightSchedule(input) {


    let firstArr = input.shift();
    let secondArr = input.shift();
    let thirdArr = input.shift();
    let flights = {};

    for (const line of firstArr) {
        let actions = line.split(' ');

        let number = actions[0]
        if (actions.length > 2) {
            let Destination = actions[1] +' ' + actions[2];
            flights[number] = { Destination, Status: 'Ready to fly' }
        } else {
            let Destination = actions[1];
            flights[number] = { Destination, Status: 'Ready to fly' }
        }


    }

    for (const line of secondArr) {
        let [number, currentStatus] = line.split(' ');

        if (flights.hasOwnProperty(number)) {
            flights[number].Status = currentStatus;
        }
    }

    for (const line in flights) {
        if (flights[line].Status == thirdArr) {
            console.log(flights[line])
        }
    }

}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
)
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]
)


// You will receive an array with arrays.
// The first array (at index 0) will hold all flights on a specific sector in the airport.
//  The second array (at index 1) will contain newly changed statuses of some of the flights at this airport.
//   The third array (at index 2) will have a single string, which will be the flight status you need to check.
//    When you put all flights into an object and change the statuses depends on the new
//    information on the second array. You must print all flights with the given status from the last array.
// •	If the value of the string obtained from the third array is "Ready to fly":
// o	then you must print flights that have not changed their status in the second array
// o	and automatically change the status to "Ready to fly"
// •	Otherwise, print only flights that have changed their status.
