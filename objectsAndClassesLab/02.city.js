function city(city) {
    
    // for (let key of Object.keys(city)) {
    //     console.log(`${key} -> ${city[key]}`);
    // }

    let entries = Object.entries(city);
    for (let [key,value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)

// Write a function that receives a single parameter – an object, containing five properties:
// { name, area, population, country, postcode }
// Loop through all the keys and print them with their values in format: "{key} -> {value}"
// See the examples below.
