function needForSpeed3(array) {
    
  let numCars = +array.shift();
  let totalCars = {};


  for (let i = 0; i < numCars; i++) {
    let element = array[i];
     let tokens = element.split('|');

     let [car, mileage, fuel] = tokens;
     mileage = Number(mileage);
     fuel = Number(fuel);


     totalCars[car] = { mileage, fuel };
    
  }


  let command = array.shift();

  

  while(command !== 'Stop'){

    let tokens = command.split(' : ');
    let action = tokens.shift();
    let car = tokens.shift();

switch(action){

  case 'Drive':

  let [distance,fuel] = tokens;
   distance = Number(distance);
  fuel = Number(fuel);


  if (car in totalCars) {
    if (totalCars[car]['fuel'] < fuel){
console.log('Not enough fuel to make that ride');
    }else{

      totalCars[car]['mileage'] += distance;
      totalCars[car]['fuel'] -= fuel;
      console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

    }
    if (totalCars[car]['mileage'] >= 100000) {
      
      console.log(`Time to sell the ${car}!`);
      delete totalCars[car];
    }


  }

  break;

  case 'Refuel':
    let newFuel =tokens;
    newFuel = Number(newFuel);
    if(car in totalCars){

      let currFuel = totalCars[car]['fuel'];
      let maxFuel = 75;
      
 
      let refuelAmount = Math.min(maxFuel - currFuel, newFuel);
      totalCars[car].fuel += refuelAmount;
      
        
        console.log(`${car} refueled with ${refuelAmount} liters`);
      
        
      


    }

  
  break;

  case 'Revert':
    let kilometers = Number(tokens);

  if (car in totalCars) {
    totalCars[car]['mileage'] -= kilometers;

    
    if (totalCars[car]['mileage'] > 10000 ) {
      console.log(`${car} mileage decreased by ${kilometers} kilometers`);
    }else{
      
      totalCars[car]['mileage'] = 10000;
    }
    
  }
  break;

}

    command = array.shift();

  }

  let entries = Object.entries(totalCars);

  for (let [car,{mileage,fuel}] of entries) {
    console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
  }


}

needForSpeed3([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  )
needForSpeed3([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  )




// On the first line of the standard input, you will receive an integer
//  n – the number of cars that you can obtain. On the next n lines, the cars 
//  themselves will follow with their mileage and fuel available,
 //separated by "|" in the following format:
// "{car}|{mileage}|{fuel}"
// Then, you will be receiving different commands, each on a new line,
//separated by " : ", until the "Stop" command is given:

// •	"Drive : {car} : {distance} : {fuel}":
// o	You need to drive the given distance, and you will need the given fuel to do that.
//  If the car doesn't have enough fuel, print: "Not enough fuel to make that ride"
// o	If the car has the required fuel available in the tank, increase
//  its mileage with the given distance, decrease its fuel with the given fuel, and print: 
// "{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
// o	You like driving new cars only, so if a car's mileage reaches 100 000 km, 
// remove it from the collection(s) and print: "Time to sell the {car}!"

// •	"Refuel : {car} : {fuel}":
// o	Refill the tank of your car. 
// o	Each tank can hold a maximum of 75 liters of fuel, so if the given amount of 
// fuel is more than you can fit in the tank, take only what is required to fill it up. 
// o	Print a message in the following format: "{car} refueled with {fuel} liters"

// •	"Revert : {car} : {kilometers}":
// o	Decrease the mileage of the given car with the given kilometers and print the 
// kilometers you have decreased it with in the following format:
// "{car} mileage decreased by {amount reverted} kilometers"
// o	If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and 
// DO NOT print anything.

// Upon receiving the "Stop" command, you need to print all 
//cars in your possession in the following format:
// "{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."
// Input / Constraints
// •	The mileage and fuel of the cars will be valid, 32-bit integers, and will never be negative.
// •	The fuel and distance amounts in the commands will never be negative.
// •	The car names in the commands will always be valid cars in your possession.
// Output
// •	All the output messages with the appropriate formats are described in the problem description.
