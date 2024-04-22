function listOfProducts(array) {

    let sorted = array.sort();
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);

    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])

listOfProducts(['Watermelon', 'Banana', 'Apples'])

// You will receive an array of products.
//  Print a numbered array of all the products ordered by name.