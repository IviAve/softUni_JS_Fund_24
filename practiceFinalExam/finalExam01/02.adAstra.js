function adAstra(array) {
    
    let text = array.shift();

    let products = [];

    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<data>\d{2}\/\d{2}\/\d{2})\1(?<kcals>[0-9]+)\1/g;

    let totalKcals = 0;

    let matches = text.matchAll(pattern);

    for (let match of matches) {
        
        
       let  {name, data, kcals} = match.groups;
      
       kcals = Number(kcals);
       totalKcals += kcals;

       products.push({name,data,kcals})

    }

    let days = Math.floor(totalKcals/2000);
    console.log(`You have food to last you for: ${days} days!`);
    products.forEach(item => console.log(`Item: ${item.name}, Best before: ${item.data}, Nutrition: ${item.kcals}`));
    
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ])


// On the first line of the input you will be given a text string.
//  You must extract the information about the food and calculate the total calories. 
// First you must extract the food info. It will always follow the same pattern rules:
// •	It will be surrounded by "|" or "#" (only one of the two) in the following pattern: 
// #{item name}#{expiration date}#{calories}#   or 
// |{item name}|{expiration date}|{calories}|
// •	The item name will contain only lowercase and uppercase letters and whitespace
// •	The expiration date will always follow the pattern: {day}/{month}/{year}, where the day,
//  month and year will be exactly two digits long
// •	The calories will be an integer between 0-10000
// Calculate the total calories of all food items and then determine how many days you 
// can last with the food you have. Keep in mind that you need 2000kcal a day.
// Input / Constraints
// •	You will receive a single string
// Output
// •	First print the amount of days you will be able to last with the food you have:
// "You have food to last you for: {days} days!"
// •	The output for each food item should look like this:
// "Item: {item name}, Best before: {expiration date}, Nutrition: {calories}"
