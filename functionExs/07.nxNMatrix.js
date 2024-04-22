function nxNMatrix(n) {

    // for (let i = 0; i < n; i++) {
    //     let row = '';
    //     for (let j = 0; j < n; j++) {
    //         row += n + ' ';
    //     }
    //     console.log(row);
    // }


    let row = (n + ' ').repeat(n); 
    for (let i = 0; i < n; i++) {
        console.log(row); 
    }
}

nxNMatrix(3)

// nxNMatrix(7)

// nxNMatrix(2)


// Write a function that receives a single integer number
// n and prints nxn matrix with that number.