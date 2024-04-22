function cutAndReverse(string) {
    
    let reversed = string.split('').reverse().join('');

    let halfOne = reversed.slice(reversed.length/2);
    let halfTwo = reversed.slice(0,reversed.length/2);


    console.log(halfOne);
    console.log(halfTwo);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')

// The input will be a single string.
// Write a function that cuts the given 
// string into half and reverse the two halves. 
// Print each half on a separate line.
