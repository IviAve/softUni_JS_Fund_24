function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    let height = 0;
    let floor = 1;

    for (let curSize = base; curSize > 0; curSize -= 2) {

        height += increment;
        let totalArea = curSize ** 2;
        if (curSize <= 2) {
            gold = totalArea * increment;

        } else {
            let stoneArea = (curSize - 2) ** 2;
            stone += stoneArea * increment;
            if (floor % 5 === 0) {
                let lapisArea = totalArea - stoneArea;
                lapisLazuli += lapisArea * increment;
            } else {
                let marbleArea = totalArea - stoneArea;
                marble += marbleArea * increment;
            }
        }
        floor++;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

//thePyramidOfKingDjoser(11, 1)
thePyramidOfKingDjoser(11,0.75)
//thePyramidOfKingDjoser(12,1)
//thePyramidOfKingDjoser(23,0.5)

// Write a JS program that calculates how much resources will be required for the construction of a pyramid.
//  It is made out of stone, marble, lapis lazuli, and gold. Your program will receive an integer
//  that will be the base width and length of the pyramid and an increment that is the height of each step.
//   The bulk is made out of stone, while the outer layer is made out of marble. Every fifth step’s
//   outer layer is made out of lapis lazuli instead of marble. The final step is made out of gold.
// The pyramid is built with 1x1 blocks with a height equal to the given increment.
//  The first step of the pyramid has a width and length equal to the given base and
//   every next step is reduced by 2 blocks (1 from each side).
//   The height of every step equals the given increment.
//   See the drawing for an example. White steps are covered in marble,
//   blue steps are covered in lapis lazuli (every fifth layer from the bottom),
//   and yellow steps are made entirely out of gold (top-most step).
// Since the outer layer of each step is made of decorative material,
// to calculate the required stone for one step, reduce the width and length by 2 blocks (one from each side),
//  find its area, and multiply it by the increment.
//  The rest of the step is made out of lapis lazuli
//   for every fifth step from the bottom and marble for all other steps.
//    To find the amount needed, you may, for example, find its perimeter and reduce it by 4
//     (to compensate for the overlapping corners), and multiply the result by the increment.
//     See the drawing for details (grey is stone, white is decoration).
// Note the top-most layer is made entirely out of gold, with a height equal to the given increment.
//  See the examples for complete calculations.
// Input
// You will receive two number parameters base and increment.
// Output
// Print on the console on separate lines the total required amounts of each m
// aterial rounded up and the final height of the pyramid rounded down, as shown in the examples.
// Constraints
// ·	The base will always be an integer greater than zero
// ·	The increment will always be a number greater than zero
// ·	Number.MAX_SAFE_INTEGER will never be exceeded for any of the calculations
