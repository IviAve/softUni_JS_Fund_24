function convertToJSON(firstName,lastName,hairColor) {
    
    let person = {}
    person.name = firstName;
    person.lastName = lastName;
    person["hairColor"] = hairColor;


    console.log(JSON.stringify(person));
}


convertToJSON('George', 'Jones', 'Brown')
convertToJSON('Peter', 'Smith', 'Blond')

// Write a function that receives a first name, last name, hair color and sets them to an object.
// Convert the object to JSON string and print it.
// Input is provided as 3 single strings in the order stated above.
