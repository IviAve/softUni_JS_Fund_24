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
                if (quantity <= 0) {
                    command = array.shift();
                    continue;
                }else{

                    if (!products.hasOwnProperty(food)) {

                        products[food] = { quantity };
    
                    }else{
                        products[food].quantity += quantity;
                    }
                }
                
                break;

            case 'Sell':


                if (!products.hasOwnProperty(food)) {
                    console.log(`You do not have any ${food}.`);

                } else {
                    if (products[food].quantity < quantity) {

                        
                        totalSolds += products[food].quantity;
                        console.log(`There aren't enough ${food}. You sold the last ${products[food].quantity} of them.`);
                        delete products[food];


                        
                    } else {
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

    for ([food, { quantity }] of entries) {

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


// You will be receiving lines with commands until you receive the "Complete" command.

//  The possible commands are:

// •	"Receive {quantity} {food}":
// o	Add the quantity to the given food.
// o	If the food does not exist, add it to your record.
// o	If the quantity is invalid (<= 0), ignore the command.

// •	"Sell {quantity} {food}":
// o	If the food is not in your record, print: "You do not have any {food}.".

// o	If there is not enough quantity of the wanted food, you should sell (decrease)
// what you have in stock and then remove the food from your record.
//  Print: "There aren't enough {food}. You sold the last {sold quantity} of them."

// o	Otherwise, decrease the quantity of the given food
// and print:  "You sold {quantity} {food}.". If, after reducing the quantity,
// there is 0 amount of this food, you should remove it from your record.
// You must keep track of all sold food quantities!

// In the end, you should print the stock availability in the format:
// "{food1}: {quantity}
// {food2}: {quantity}
// …
// {foodN}: {quantity}
// All sold: {count of all sold food quantity} goods"
// Input
// •	You will be receiving lines until you receive the "Complete" command.
// •	The input will always be valid.
// Output
// •	Print the stock availability in the format described above.
// •	Print the amount of all sold food in the format described above.
