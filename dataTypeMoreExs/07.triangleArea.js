function triangleArea(sideA,sideB,sideC){

    let s = (sideA + sideB + sideC)/2;
    let a = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC))
        console.log(a);
}


triangleArea(2,
    3.5,
    4
    )
triangleArea(3,
    5.5,
    4
    )

//     Write a function that calculates a triangle’s area by its 3 sides.
// The input comes as three number arguments, representing one side of a triangle.
// The output should be printed to the console.

