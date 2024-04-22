function plantDiscovery(input) {

    let plantCount = Number(input.shift());
    let totalPlants = {};

    for (let i = 0; i < plantCount; i++) {
        let [plant, rarity] = input.shift().split('<->')
        rarity = Number(rarity);
        totalPlants[plant] = {
            plant,
            rarity,
            rating: 0,
            count: 0,
        };
    }

    let command = input.shift();

    while (command !== 'Exhibition') {
        let tokens = command.split(': ');
        let action = tokens.shift();
        let info = tokens.join('').split(' - ');
        let [plant, rating] = info;
        rating = Number(rating);

        if (totalPlants.hasOwnProperty(plant)) {
            switch (action) {
                case 'Rate':
                    let counter = 1;


                    totalPlants[plant]['rating'] += rating;
                    totalPlants[plant]['count'] += counter;

                    break;
                case 'Update':
                    
                    totalPlants[plant]['rarity'] = rating;

                    break;
                case 'Reset':
                    
                    totalPlants[plant]['rating'] = 0;
                    totalPlants[plant]['count'] = 0;
                    break;
            }
        } else {
            console.log(`error`);
        }

        command = input.shift();
    }

    console.log(`Plants for the exhibition:`);

    
    for (const key in totalPlants) {
        
            let averageCount = totalPlants[key]['rating'] / totalPlants[key]['count'] || 0;
        
                         
               
        console.log(`- ${key}; Rarity: ${totalPlants[key]['rarity']}; Rating: ${(averageCount).toFixed(2)}`);
    }
}


plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
)
// plantDiscovery((["2",
// "Candelabra<->10",
// "Oahu<->10",
// "Rate: Oahu - 7",
// "Rate: Candelabra - 6",
// "Exhibition"])
// )



// On the first line, you will receive a number n. On the next n lines,
//  you will be given some information about the plants that you have discovered in the format: "{plant}<->{rarity}".
//  Store that information because you will need it later. If you receive a plant more than once, update its rarity.
// After that, until you receive the command "Exhibition", you will be given some of these commands:
// •	"Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)
// •	"Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
// •	"Reset: {plant}" – remove all the ratings of the given plant
// Note: If any given plant name is invalid, print "error"
// After the command "Exhibition", print the information that you have about the plants in the following format:
// "Plants for the exhibition:
// - {plant_name1}; Rarity: {rarity}; Rating: {average_rating}
// - {plant_name2}; Rarity: {rarity}; Rating: {average_rating}
// …
// - {plant_nameN}; Rarity: {rarity}; Rating: {average_rating}"
// The average rating should be formatted to the second decimal place.
// Input / Constraints
// •	You will receive the input as described above.
// •	JavaScript: you will receive a list of strings.
// Output
// •	Print the information about all plants as described above.
