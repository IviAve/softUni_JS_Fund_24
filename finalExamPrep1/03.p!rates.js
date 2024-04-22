function pirates(array) {
    // let arrInfo = [];
    let objectInfo = {};


    let command = array.shift();

    while (command !== 'Sail') {

        let [city, population, gold] = command.split('||');
        population = Number(population);
        gold = Number(gold);


        if (city in objectInfo) {
            objectInfo[city].population += population;
            objectInfo[city].gold += gold;
        } else {
            objectInfo[city] = { population, gold };

        }
        command = array.shift();
    }

    command = array.shift();
    while (command !== 'End') {

        let tokens = command.split('=>');
        let action = tokens.shift();

        if (action === 'Plunder') {

            let [city, people, gold] = tokens;
            people = Number(people);
            gold = Number(gold);

            objectInfo[city].population -= people;
            objectInfo[city].gold -= gold;

            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (objectInfo[city].population <= 0 || objectInfo[city].gold <= 0) {

                console.log(`${city} has been wiped off the map!`);
                delete objectInfo[city];


            }

        } else if (action === 'Prosper') {

            let [city, gold] = tokens;

            gold = Number(gold);

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
                command = array.shift();
                continue;

            } else {
                objectInfo[city].gold += gold;

                console.log(`${gold} gold added to the city treasury. ${city} now has ${objectInfo[city].gold} gold.`);
            }

        }


        command = array.shift();
    }

    let towns = Object.entries(objectInfo);
    if (towns.length === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');

    } else {
        
        console.log(`Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`);
        towns.forEach(([city, stats]) => console.log(`${city} -> Population: ${stats.population} citizens, Gold: ${stats.gold} kg`)

        );
    }

}

pirates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
)
// pirates((["Nassau||95000||1000",
//     "San Juan||930000||1250",
//     "Campeche||270000||690",
//     "Port Royal||320000||1000",
//     "Port Royal||100000||2000",
//     "Sail",
//     "Prosper=>Port Royal=>-200",
//     "Plunder=>Nassau=>94000=>750",
//     "Plunder=>Nassau=>1000=>150",
//     "Plunder=>Campeche=>150000=>690",
//     "End"])
// )
// pirates((['Nassau||95000||1000',
// 'Sail',
// 'Plunder=>Nassau=>95000=>1000',
// 'End']))





// Until the "Sail" command is given, you will be receiving:
// •	You and your crew have targeted cities, with their population and gold, separated by "||".
// •	If you receive a city that has already been received,
//  you have to increase the population and gold with the given values.
// After the "Sail" command, you will start receiving lines
// of text representing events until the "End" command is given.
// Events will be in the following format:
// •	"Plunder=>{town}=>{people}=>{gold}"
// o	You have successfully attacked and plundered the town,
// killing the given number of people and stealing the respective amount of gold.
// o	For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."
// o	If any of those two values (population or gold) reaches zero, the town is disbanded.
// 	You need to remove it from your collection of targeted cities
//  and print the following message: "{town} has been wiped off the map!"
// o	There will be no case of receiving more people or gold than there is in the city.
// •	"Prosper=>{town}=>{gold}"
// o	There has been dramatic economic growth in the given city,
// increasing its treasury by the given amount of gold.
// o	The gold amount can be a negative number, so be careful.
//  If a negative amount of gold is given, print: "Gold added cannot be a negative number!" and ignore the command.
// o	If the given gold is a valid amount, increase the town's gold
// reserves by the respective amount and print the following message:
// "{gold added} gold added to the city treasury. {town} now has {total gold} gold."
// Input
// •	On the first lines, until the "Sail" command, you will be
// receiving strings representing the cities with their gold and population, separated by "||"
// •	On the following lines, until the "End" command, you will
// be receiving strings representing the actions described above, separated by "=>"
// Output
// •	After receiving the "End" command, if there are any existing
// settlements on your list of targets, you need to print all of them, in the following format:
// "Ahoy, Captain! There are {count} wealthy settlements to go to:
// {town1} -> Population: {people} citizens, Gold: {gold} kg
// {town2} -> Population: {people} citizens, Gold: {gold} kg
//    …
// {town…n} -> Population: {people} citizens, Gold: {gold} kg"
// •	If there are no settlements left to plunder, print:
// "Ahoy, Captain! All targets have been plundered and destroyed!"
// Constraints
// •	The initial population and gold of the settlements will be valid 32-bit integers,
// never negative, or exceed the respective limits.
// •	The town names in the events will always be valid towns that should be on your list.
