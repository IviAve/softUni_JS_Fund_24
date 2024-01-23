function integerAndFloat (a,b,c){
let sum = a + b + c;
console.log(sum % 1 === 0 ?sum +' - Integer' : sum + ' - Float');
}

integerAndFloat(9, 100, 1.1)
integerAndFloat(100, 200, 303)

// You will receive 3 numbers. Your task is to find their sum and 
// print result to the console in the following format:
// `{sum} - {type of the number (Integer or Float)}`
