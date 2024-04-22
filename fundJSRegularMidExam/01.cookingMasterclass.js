function cookingMasterclass(array) {

    let budget = Number(array.shift());
    let totalStudent = Number(array.shift());
    let floorPrice = Number(array.shift());
    let oneEggPrice = Number(array.shift());
    let apronPrice = Number(array.shift());

    let priceFortenEggs = oneEggPrice * 10;
    let totalPriceApron = Math.ceil(totalStudent * 1.2) * (apronPrice);
    let totalPriceEggs = totalStudent * priceFortenEggs;
   // let totalPriceFloor = totalStudent * floorPrice;

   // if (totalStudent % 5 === 0) {
        let discountFloor = Math.floor(totalStudent / 5);

        let totalPriceFloor = (totalStudent -discountFloor) * floorPrice;

    //}


    let totalPrice = totalPriceFloor + totalPriceApron + totalPriceEggs;

    if (totalPrice <= budget) {
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
    } else {
        console.log(`${(totalPrice - budget).toFixed(2)}$ more needed.`);
    }


}


cookingMasterclass(['50',
    '2',
    '1.0',
    '0.10',
    '10.0'])

cookingMasterclass(['100',
    '25',
    '4.0',
    '1.0',
    '6.0'])

cookingMasterclass(['946',
    '20',
    '12.05',
    '0.42',
    '27.89'])



// The number of items depends on how many students will sign up for the course.
//  The educational set for one student consists of 1 package of flour, 10 eggs, and an apron.
// You will be given George's budget, the number of students signed, and each item's price.
// You should help George calculate if the budget is enough to buy all the items or how much more money he needs.
// You should know that the aprons get dirty often, so George should buy 20% more, rounded up to the next integer.
//  Also, every fifth package of flour is free.
// Input / Constraints
// The input data will consist of:
// •	budget - a floating-point number in the range [0.00…1000.00]
// •	students - an integer in the range [0…100]
// •	price for a package of flour - a floating-point number in the range [0.00…100.00]
// •	price for a single egg - a floating-point number in the range [0.00…100.00]
// •	price for a single apron - a floating-point number in the range [0.00…100.00]
// The input data will always be valid. There is no need to check it explicitly.
// Output
// The output should be printed on the console.
// •	If the calculated price of the items is less or equal to the budget:
// o	"Items purchased for {the cost of the items}$."
// •	If the calculated price is more than the budget:
// o	 "{neededMoney}$ more needed."
// •	All prices must be formatted to two digits after the decimal point.
