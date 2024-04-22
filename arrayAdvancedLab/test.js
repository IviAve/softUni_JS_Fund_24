function test(arr) {
    let newArr = arr.filter((a,b) =>a>b);
    console.log(newArr);
}

test([2,6,1,7,4,11])