function bakeryShop(array) {

    let products = {};

    let totalSolds = 0;
        let command = array.shift();
    
        while (command !== 'Complete') {
    
            let tokens = command.split(' ');
            let action = tokens.shift();
    
            let [quantity, food] = tokens;
            quantity = Number(quantity);
    
            switch (action) {
                case 'Receive':
    
                    if (!products.hasOwnProperty(food)) {
    
                        if (quantity > 0) {
                            products[food] = {quantity};
                        }
    
                    }
                    break;
    
                case 'Sell':
    
    
                    if (!products.hasOwnProperty(food)) {
                        console.log(`You do not have any ${food}.`);
    
                    }else{
                        if (products[food].quantity < quantity) {
                            
                            //let sold = quantity - products[food].quantity;
                            totalSolds += products[food].quantity;
                            console.log(`There aren't enough ${food}. You sold the last ${products[food].quantity} of them.`);
                            products[food].quantity -= products[food].quantity;
    
                            
                            delete products[food];
    
                        }else{
                             products[food].quantity -= quantity;
                            totalSolds += quantity;
                           
    
                            console.log(`You sold ${quantity} ${food}.`);
    
                            if (products[food].quantity === 0) {
                                 delete products[food];
                            }
                        }
                    }
                    break;
            }
    
            command = array.shift();
    
        }
    
        let entries = Object.entries(products);
    
        for ( [food,{quantity}] of entries) {
            
            console.log(`${food}: ${quantity}`);
        }
    
        console.log(`All sold: ${totalSolds} goods`);
}

// bakeryShop((['Receive 105 cookies',
//     'Receive 10 donuts',
//     'Sell 10 donuts',
//     'Sell 1 bread',
//     'Complete'])
// )
// bakeryShop((['Receive 10 muffins',
//     'Receive 23 bagels',
//     'Sell 5 muffins',
//     'Sell 10 bagels',
//     'Complete'])
// )

bakeryShop(['Receive 105 cookies',
    'Receive -5 cookies',
    //'Receive 5 cookies',
    'Receive 10 donuts',
    'Sell 10 donuts',
    'Sell 110 cookies',
    'Sell 10 donuts',
    'Sell 1 bread',
    'Complete'])