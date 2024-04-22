function oddAndEvenSum(num) {
    let strFromNum = String(num);
    let [evenSum, oddSum] = evenOrrOddSum(strFromNum)

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    function evenOrrOddSum(num) {

        let evenSum = 0;
        let oddSum = 0;

        for (let chars of num) {
            let char = Number(chars);

            if (char % 2 === 0) {
                evenSum += char;
            }
            else {
                oddSum += char;
            }

        }
        return [evenSum, oddSum];

    }

}

oddAndEvenSum(1000435)

oddAndEvenSum(3495892137259234)


// You will receive a single number. You have to write a function,
//  that returns the sum of all even and all odd digits from that number. 
