function addressBook(array) {

    let catalog = {};

    for (const info of array) {

        let [name, address] = info.split(':');

        catalog[name] = address;
    }
    let sortedInfo = Object.entries(catalog).sort((a, b) => a[0].localeCompare(b[0]));

    sortedInfo.forEach(el => console.log(`${el[0]} -> ${el[1]}`));

}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
)

// Write a function that stores information about a person’s name and his address.
//  The input comes as an array of strings. Each string contains
//  the name and the address separated by a colon.
//   If you receive the same name twice just replace the address.
//    In the end, print the full list, sorted alphabetically by the person’s name.