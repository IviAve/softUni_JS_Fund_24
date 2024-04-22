function storage(array) {
    
    let list = new Map();

    for (let element of array) {
        
        let [product,quantity] = element.split(" ");
        quantity = Number(quantity);

        if (!list.has(product)) {
            list.set(product,quantity);

        }else{
            let currQuantity = list.get(product);
            currQuantity += quantity;
            list.set(product,currQuantity)
        }

    }
    for (const kvp of list) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }

}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
)

// Write a function that takes a certain number of items and their quantity.
//  If the same item appears more than once, add the new amount to the existing one. 
//  In the end, print all the items and their amount without sorting them.
//   The input comes as an array of strings. Try using a Map().