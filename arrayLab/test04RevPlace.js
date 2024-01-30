function test04RevPlace (arr){

let count = arr.length;
    let counter = 0;
    for (let index = 0; index < count; index++) {
        let firstElement = arr.shift();
        arr.push(firstElement);

        counter++;
        if (counter === count) {
            break;
        }


    }
    let reverseArr = arr.reverse();
    console.log(reverseArr.join(' '));
}

test04RevPlace(['a', 'b', 'c', 'd', 'e'])