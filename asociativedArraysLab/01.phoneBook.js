function phoneBook(arr) {

    let catalog = {};
    for (let iterator of arr) {

        let [name, number] = iterator.split(' ');
        

        catalog[name] = number;

    }
    for (const name in catalog) {
        console.log(`${name} -> ${catalog[name]}`);
    }

}




phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)

phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
)


// 1.	Phone Book
// Write a function that stores information about a person’s name and phone number.
//  The input is an array of strings with space-separated name and number.
//   Replace duplicate names. Print the result as shown.
