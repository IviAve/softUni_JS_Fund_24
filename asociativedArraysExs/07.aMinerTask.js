function aMinerTask(array) {
    
    let resursQtys = {};

    for (let i = 0; i < array.length; i+=2) {
        let res = array[i];
        let qty = Number(array[i + 1]);

        if (res in resursQtys) {
            resursQtys[res] += qty;
        }
        else{
            resursQtys[res] = qty
        }
        
    }
    let entries = Object.entries(resursQtys);

    for (let item of entries) {
        console.log(`${item[0]} -> ${item[1]}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )

//     You are given an array of strings. Every odd string is representing a resource 
//     (e.g. Gold, Silver, Copper, and so on), and every even – quantity. 
//     Your task is to collect the resources and print them each on a new line. 
// Print the resources and their quantities in the format:
// {resource} –> {quantity}
// The quantities inputs will be in the range [1 … 2 000 000 000].
