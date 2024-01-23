function rounding(num, fixsign) {

    if (fixsign > 15) {
        fixsign = 15;
    }
    let fixednum = num.toFixed(fixsign);
    console.log(parseFloat(fixednum));


}

rounding(3.1415926535897932384626433832795, 2)

// Write a JS function that rounds numbers to a specific precision.
// The input comes as two numbers. The first value is the number
// to be rounded and the second is the precision (significant decimal places).
//  If the passed precision is more than 15, it should automatically be reduced to 15.
// Remove trailing zeroes, if any (you can use parseFloat (number))
// The output should be printed to the console. Do not print insignificant decimals.
