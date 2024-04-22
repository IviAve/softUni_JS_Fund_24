function travelTime(array) {

    let travelInfo = {};

    for (let info of array) {

        let [country, town, price] = info.split(' > ');
        let currPrice = Number(price);

        if (!travelInfo.hasOwnProperty(country)) {
            travelInfo[country] = {};

        }
        let countryObj = travelInfo[country];

        if (!countryObj.hasOwnProperty(town) || countryObj[town] > currPrice) {
            countryObj[town] = currPrice;

        }
    }

    let sortedDestinations = Object.entries(travelInfo).sort((a, b) => a[0].localeCompare(b[0]))

    for (let [country, town] of sortedDestinations) {
        let sortedTowns = Object.entries(town).sort((a, b) => a[1] - b[1]);
        let logCountry = `${country} ->`;
        for (const [town, price] of sortedTowns) {
            logCountry += ` ${town} -> ${price}`;
        }

        console.log(logCountry);

    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]
)


// Write a function that collects and orders information about travel destinations.
// As input, you will receive an array of strings.
// Each string will consist of the following information with the format:
// "Country name > Town name > Travel cost"

// The Country name will be a string, the Town name will be a unique string,
// Travel cost will be a number.
// If you receive the same Town name twice, you should keep the cheapest offer.
//  Have in mind that one Country may have several Towns to visit.
// After you finish the organizational part, you need to let Steven
//  know which destination point to visit first. The order will be as follows:
//   First sort Country names alphabetically and then sort by lowest Travel cost.
