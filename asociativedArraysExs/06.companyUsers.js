function companyUsers(array) {
    
    let companyEmpl ={};

    for (let el of array) {
        
        let [company,employeeId] = el.split(' -> ');

        if (company in companyEmpl) {
            
            if (!companyEmpl[company].includes(employeeId)) {
                companyEmpl[company].push(employeeId);
            }
            
        }else{
            companyEmpl[company] = [employeeId];
        }
    }
    let sortdedComp = Object.entries(companyEmpl).sort((a,b) => a[0].localeCompare(b[0]));
    
    for (let [company,employeeIds] of sortdedComp) {
        console.log(`${company}`);
       for (let employer of employeeIds) {
        console.log(`-- ${employer}`);
       }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    )

//     Write a function, which keeps the information about companies and their employees. 
// You will receive an array of strings containing the company name and employee's id. 
// Add each employee to the given company. Keep in mind that a company cannot have two 
// employees with the same id.
// When you finish reading data, order the companies by their name in ascending order. 
// Print the company name and each employee's id in the following format:
// {companyName}
// -- {id1}
// -- {id2}
// -- {idN}
// Input / Constraints
// •	The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
// •	The input always will be valid.
