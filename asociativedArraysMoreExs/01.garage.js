function garage(input) {
    
    let garages = {};
 
    for (const line in input) {
        let [garage, carInfo] = input[line].split(' - ');
 
        if (!garages.hasOwnProperty(garage)) {
            garages[garage] = {};
        }
 
        garages[garage][line] = carInfo;
    }
 
    let entries = Object.entries(garages);
 
    for (const [garage, carObj] of entries) {
        console.log(`Garage № ${garage}`);
 
        for (const key in carObj) {
            while (carObj[key].includes(': ')) {
                carObj[key] = carObj[key].replace(': ', ' - ');
            }
 
            console.log(`--- ${carObj[key]}`);
        }
    }
}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi',
 '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])

garage(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']
)

// Write a function that stores cars in garages. You will be given an array of strings.
//  Each string will contain a number of a garage and info about a car.
//   You have to store the car (with its info) in the given garage. 
//   The info about the car will be in the format:
//  "{key1}: {value1}, {key2}: {value2}…"
// If the garage does not exist, create it. The cars will always be unique.
//  At the end print the result in the format:
// "Garage № {number}:
// --- {carOneKeyOne} - {carOneValueOne}, {carOneKeyTwo} - {carOneValueTwo}…
// --- {the same for the next car}
// Garage № {number}: …"
