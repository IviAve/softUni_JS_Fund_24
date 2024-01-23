function bitcoinMining(input) {
    let countDays = 0;
    let index = 0;
    let command = input.shift();
    

    let gold = 0;
    let totalGold = 0;
    let dayFirstCoin = 0;
    let totalBitCoins = 0;

    while (command !== undefined) {

        gold = command;
        countDays++;
        if (countDays % 3 === 0) {
            gold *= 0.70;
        }
        totalGold += gold * 67.51;



        if (totalGold >= 11949.16) {

            while (totalGold >= 11949.16) {
                totalBitCoins++;

                totalGold -= 11949.16;
            } if (dayFirstCoin === 0) {
                dayFirstCoin = countDays;
            }

        }

        command = input.shift();
        

    }
    console.log(`Bought bitcoins: ${totalBitCoins}`);
    if (totalBitCoins !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstCoin}`);
    }
    console.log(`Left money: ${totalGold.toFixed(2)} lv.`);

}

bitcoinMining([100, 200, 300])

bitcoinMining([50, 100])

bitcoinMining([3124.15, 504.212, 2511.124])

// Write a JavaScript program that calculates the total amount of bitcoins you purchased
// with the gold you mined during your shift at the mine.
// Your shift consists of a certain number of days where you mine an amount of gold in grams.
// Your program will receive an array with the amount of gold you mined each day,
// where the first day of your shift is the first index of the array. Also, someone
// was stealing every third day from the start of your shift 30% from the mined gold for this day.
// You need to check, which day you have enough money to buy your first bitcoin.
//  For the different exchanges use these prices:
// 1 Bitcoin	11949.16 lv.
// 1 g of gold	67.51 lv.

// Input
// You will receive an array of numbers, representing your shift at the mine.
// Output
// Print on the console these lines in the following formats:
// ·	First-line prints the total amount of bought bitcoins:
//  `Bought bitcoins: {count}`
// ·	Second-line prints which day you bought your first bitcoin:
//  `Day of the first purchased bitcoin: {day}`
// In case you did not purchase any bitcoins, do not print the second line.
// ·	Third-line prints the amount of money that’s left after the bitcoin purchases rounded
//  by the second digit after the decimal point:
//   `Left money: {money} lv.`
//   Day 1 – you dig up 100 g of gold then exchange it for 6751.00 lv.

// Day 2 – you dig up 200 g of gold then exchange it for 13,502.00 lv.
//and the total amount of money is 20,253.00 lv.
//  Then you buy 1 Bitcoin which leaves you with 8,303.84 lv.
//Also, this purchase is the first day you bought bitcoin.

// Day 3 – you dig up 300 g of gold but then 30% of it is stolen and your gold drops to
// 210 g which you exchange for 14,177.10 lv. making your total amount of money 22,480.94 lv.
// Then you buy 1 Bitcoin making the final amount
//of money that you have left with 10,531.78 lv. with 2 bought Bitcoins.

