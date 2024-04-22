function carWash(array) {
    let clinigCar = cleaningWash(array)

console.log(`The car is ${clinigCar.toFixed(2)}% clean.`);
    function cleaningWash(params) {
        //let soap = array.shift();
        let action = 0;

        for (let command of array) {
            switch (command) {
                case 'soap':
                    action += 10;
                    break;
                case 'water':
                    action *= 1.20;
                    break;
                case 'vacuum cleaner':
                    action *= 1.25;
                    break;
                case 'mud':
                    action *= 0.90;
                    break;
    
    
            }
        }
        return action;
    }
   
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])


// Write a JS function that receives some commands. Depending on the command,
//  add or subtract a percentage of how much the car is cleaned or dirty.
//   Start from 0. The first command will always be 'soap':
// •	soap – add 10 to the value
// •	water – increase the value by 20%
// •	vacuum cleaner – increase the value by 25%
// •	mud – decrease the value by 10%
// The input comes as an array of strings. When finished cleaning the car,
//  print the resulting value in the format:
//              `The car is {value}% clean.`
//   Note: The value should be rounded to the second decimal point.
