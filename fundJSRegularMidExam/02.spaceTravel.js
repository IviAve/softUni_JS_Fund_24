function spaceTravel(array) {

    let tokens = array.shift().split(',');

    let startFuel = Number(array[0]);
    let startAmmunition = Number(array[1]);

    let space = tokens.shift().split('||');

    let command = space.shift();


    while (command !== 'Titan') {
        let actions = command.split(' ');

        let act = actions.shift();
        let num = Number(actions.shift());

        switch (act) {
            case 'Travel':
                let lightYears = 0;
                for (let i = 0; i < num; i++) {

                    startFuel--;
                    lightYears++;

                }
                if (startFuel <= 0) {
                    console.log('Mission failed.');
                    break;
                } else {
                    console.log(`The spaceship travelled ${lightYears} light-years.`);
                }
                break;

            case 'Enemy':

                if (startAmmunition >= num) {

                    startAmmunition -= num;
                    console.log(`An enemy with ${num} armour is defeated.`);
                } else if (startAmmunition < num) {
                    let pointArmor = num * 2;
                    if (startFuel - pointArmor >= 0) {
                        console.log(`An enemy with ${num} armour is outmaneuvered.`);
                    } else {
                        console.log('Mission failed.')
                        break;
                    }
                }
                break;


            case 'Repair':

                let addedAmmunitions = num * 2;
                startFuel += num;
                startAmmunition += addedAmmunitions;

                console.log(`Ammunitions added: ${addedAmmunitions}.`);
                console.log(`Fuel added: ${num}.`);
                break;
            
        }


        command = space.shift();

    }


    console.log('You have reached Titan, all passengers are safe.');


}


spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan',
    '50',
    '80'])

spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100'])






// You will be given three lines of inputs:
// •	A string representing the travel route to Titan, separated by pipes "||".
// The first element will be a command, and the second element will be an integer.
// •	An integer represents the starting amount of fuel.
// •	An integer represents the starting amount of ammunition.
// The commands are as follows:
// •	Travel {light-years} – the spaceship traveled the given distance.
// For every light-year traveled one point of fuel is consumed.
// o	If the spaceship has enough fuel to travel the given distance print:
// "The spaceship travelled {distance} light-years."
// o	If the fuel is not enough, print "Mission failed." on the console and stop the program.
// •	Enemy {enemy's armour} – the spaceship encounters an enemy and has the option to fight or run.
// o	If the ammunition is enough (current ammunition count is equal or more than enemy's armour),
//   all the ammunitions needed are fired (one round of ammunition for every one point of enemy's armour)
//   and the following message is printed:
// "An enemy with {enemyPoints} armour is defeated."
// o	If the ammunition is not enough, the spaceship should try to run, where
// for each enemy's armour point the spaceship consumes 2 fuel points.
//  If the spaceship menages to run away the following message is printed:
// "An enemy with {enemyPoints} armour is outmaneuvered."
// o	If fight or run is not possible, print:
// "Mission failed." and stop the program.
// •	Repair {number of ammunition and fuel added} – the given amount of fuel is added to the spaceship's total fuel.
//  For the ammunition, the given amount is multiplied by 2 and added to the spaceship's total ammunitions and two lines are printed:
// "Ammunitions added: {added amount of ammunitions}."
// "Fuel added: {added amount of fuel}."
// •	Titan – the spaceship reaches Titan, you should print:
// "You have reached Titan, all passengers are safe." and stop the program.
// Input
// •	On the first line, a string representing the rout, separated with "||": "route1||route2||route3…".
// •	On the second line, you will receive an integer representing the starting amount of fuel.
// •	On the third line, you will receive an integer representing the starting amount of ammunition.
// Output
// After each command print the suitable message.
// Constraints
// •	All the given numbers will be valid integers in the range [0, 1000].
// •	All the commands will be valid.
