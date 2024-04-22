function spaceTravel(array) {

    let tokens = array.shift().split(',');

    let startFuel = Number(array[0]);
    let startAmmunition = Number(array[1]);

    let space = tokens.shift().split('||');

    let command = space.shift();

let isTitan = true;
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
                    isTitan = false;
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
                        isTitan = false;
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

if (isTitan) {
    console.log('You have reached Titan, all passengers are safe.');

}
    

}


spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan',
    '50',
    '80'])

spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100'])
