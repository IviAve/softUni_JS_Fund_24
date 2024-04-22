function employees(list) {
    
    let employeeList = {};

    list.forEach(person => {
        employeeList[person] = person.length;
});

    for (let key in employeeList) {
        
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
    }
   

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )

    employees([
        'Samuel Jackson',
        'Will Smith',
        'Bruce Willis',
        'Tom Holland'
        ]
        )

// You're tasked to create a list of employees and their personal numbers.
// You will receive an array of strings. Each string is an 
// employee name and to assign them a personal number you have to find the 
// length of the name (whitespace included). 
// Try to use an object.
// At the end print all the list employees in the following format:
//  "Name: {employeeName} -- Personal Number: {personalNum}" 
