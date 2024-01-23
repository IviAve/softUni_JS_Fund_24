function vacation(numPeople, typeOfGroup, dayOfWeek) {

    let totalprice = 0;

    switch (dayOfWeek) {
        case 'Friday':
            if (typeOfGroup === 'Students') {
                totalprice = numPeople * 8.45;
            } else if (typeOfGroup === 'Business') {
                totalprice = numPeople * 10.90;
            } else if (typeOfGroup === 'Regular')
                totalprice = numPeople * 15;
            break;
        case 'Saturday':
            if (typeOfGroup === 'Students') {
                totalprice = numPeople * 9.80;
            } else if (typeOfGroup === 'Business') {
                totalprice = numPeople * 15.60;
            } else if (typeOfGroup === 'Regular')
                totalprice = numPeople * 20;
            break;
        case 'Sunday':
            if (typeOfGroup === 'Students') {
                totalprice = numPeople * 10.46;
            } else if (typeOfGroup === 'Business') {
                totalprice = numPeople * 16;
            } else if (typeOfGroup === 'Regular') {
                totalprice = numPeople * 22.50;
            }
            break;
    }
    if (typeOfGroup === 'Students'&& numPeople >= 30) {
        totalprice *= 0.85;
    }else if (typeOfGroup === 'Business' && numPeople >= 100){
totalprice -= (totalprice/numPeople)* 10;
    }else if(typeOfGroup === 'Regular' && (numPeople >= 10 && numPeople <= 20)){
totalprice *= 0.95;
    }


    console.log(`Total price: ${totalprice.toFixed(2)}`);

}

vacation(40,
    "Regular",
    "Saturday"
    
    
    
)

//          Friday	Saturday	Sunday
// Students   8.45	  9.80	    10.46
// Business	  10.90	  15.60	      16
// Regular	    15	  20	   22.50

// You are given a group of people, the type of the group, and the day of the week they are going to stay.
//  Based on that information calculate how much they have to pay and print that price on the console.
//  Use the table below. In each cell is the price for a single person.
// The output should look like that: `Total price: {price}`.
// The price should be formatted to the second decimal point.
// There are also discounts based on some conditions:
// ·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// ·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
// ·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce
// the total price by 5%
// Note: You should reduce the prices in that EXACT order.
