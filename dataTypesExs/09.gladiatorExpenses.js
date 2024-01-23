function gladiatorExpenses (lost,helmPrice,swordPrice,shildPrice,armorPrice){

    let countShild = 0;
    let totalSum = 0;
    for(let i = 1 ;i <= lost; i++){

    if(i %2 === 0){
totalSum += helmPrice;
    } if (i % 3 === 0){
totalSum += swordPrice;
    } if (i %6 === 0){
        totalSum += shildPrice;
        countShild++;
        if(countShild === 2){
totalSum += armorPrice;
countShild = 0 ;
        }
    }
}

    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);
}

gladiatorExpenses(7,
    2,
    3,
    4,
    5
    )


gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    )

// As a gladiator, Peter has to repair his broken equipment when he loses a fight.
//  His equipment consists of a helmet, sword, shield, and armor. You will receive Peter`s lost fights count. 
// •	Every second lost game, his helmet is broken.
// •	Every third lost game, his sword is broken.
// •	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
// •	Every second time, when his shield brakes, his armor also needs to be repaired. 
// You will receive the price of each item in his equipment. Calculate his expenses 
// for the year for renewing his equipment. 
// Input / Constraints
// You will receive 5 parameters to your function:
// •	The first parameter - lost fights count - is an integer in the range [0, 1000].
// •	The second parameter - helmet price - is the floating-point number in the range [0, 1000]. 
// •	The third parameter - sword price - is the floating-point number in the range [0, 1000]. 
// •	The fourth parameter - shield price - is the floating-point number in the range [0, 1000]. 
// •	The fifth parameter - armor price - is the floating-point number in the range [0, 1000]. 
// Output
// •	As output you must print Peter`s total expenses for new equipment
//  rounded to the second decimal point: "Gladiator expenses: {expenses} aureus"
// •	Allowed working time / memory: 100ms / 16MB.
