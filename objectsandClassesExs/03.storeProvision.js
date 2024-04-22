function storeProvision(available,delivery) {
    
    const storedProducts = {};
    const availableLength = available.length;
    const deliveryLength = delivery.length;

    for (let index = 0; index < availableLength; index+=2) {
        const currentProduct = available[index];
        storedProducts[currentProduct] = Number(available[index +1]);
    }

    for (let index = 0; index < deliveryLength; index+=2) {
        const currentProduct = delivery[index];
        
        if (!storedProducts.hasOwnProperty(currentProduct)) {
            storedProducts[currentProduct] = 0;
        }

        storedProducts[currentProduct] += Number(delivery[index + 1])
    }
    
    for (const key in storedProducts) {
        console.log(`${key} -> ${storedProducts[key]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    )


// You will receive two arrays. The first array represents the current stock of the local store.
//  The second array will contain products that the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold the name of the product and every odd index
//  will hold the quantity of that product. The second array could contain
//   products that are already in the local store. If that happens increase
//    the quantity for the given product. You should store them into an object,
//     and print them in the following format: (product -> quantity)
// All of the arrays’ values will be strings.
