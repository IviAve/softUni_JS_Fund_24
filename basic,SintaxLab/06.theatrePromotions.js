function theatrePromotions(day, age) {

    let price = 0;
    if (age < 0 || age > 122) {
        console.log('Error!');
        return;

    } else if (age <= 18) {
        switch (day) {
            case 'Weekday':
                price = 12;
                break;
            case 'Weekend':
                price = 15;
                break;
            case 'Holiday':
                price = 5;
                break;
        }
    }else if (age <= 64) {
        switch (day) {
            case 'Weekday':
                price = 18;
                break;
            case 'Weekend':
                price = 20;
                break;
            case 'Holiday':
                price = 12;
                break;
        }

    } else if (age <= 122) {
        switch (day) {
            case 'Weekday':
                price = 12;
                break;
            case 'Weekend':
                price = 15;
                break;
            case 'Holiday':
                price = 10;
                break;
        }
    
    }
console.log(`${price}$`);
}
     


theatrePromotions('Weekday',
    0)

// Day / Age	0 <= age <= 18	18 < age <= 64	64 < age <= 122
// Weekday	         12$	         18$	          12$
// Weekend	         15$	         20$	          15$
// Holiday	          5$	         12$	          10$
