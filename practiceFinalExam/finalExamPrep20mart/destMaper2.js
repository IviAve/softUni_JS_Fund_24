function destinationMapper(text) {
    let pattern = /([=|\/])(?<destination>[A-Z][[A-Za-z]{2,})\1/g;
    let inventar = pattern.exec(text);
    let towns = [];
    let travelPoints = 0;
 
    while (inventar !== null) {
        let destination = inventar.groups.destination;
        let length = destination.length;
 
        towns.push(destination)
        travelPoints += length;
 
        inventar = pattern.exec(text);
    }
 
    console.log(`Destinations: ${towns.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
 
 
}


destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))
destinationMapper(("ThisIs some InvalidInput"))
