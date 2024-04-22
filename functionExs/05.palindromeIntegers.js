function palindromeIntegers(array) {
    for (let num of array) {
        let isPalindrom = findPalindrome(num);
        console.log(isPalindrom);
    }
    

    function findPalindrome (num){

        let numAsString = String(num);
        let reversedStr = numAsString.split('').reverse().join('');
        if(reversedStr === numAsString){
return true;
        }
return false;
    }
}

palindromeIntegers([123,323,421,121])

palindromeIntegers([32,2,232,1010])


// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001.
//  Write a function, which receives an array of positive integers and 
//checks if each integer is a palindrome or not.
// Output
// •	If the current integer is a palindrome, print: "true"
// •	Otherwise, print: "false"
