// Function to reverse a string
function reverseString(string) {
    let reverses = '';
    for (let i = string.length - 1;i >= 0; i--){
      reverses +=string[i];
    }
    console.log(reverses);
}
reverseString('Hello')

function reverseString (text){
  let reversed = text.split('');
  console.log(reversed.reverse().join(''));
}

reverseString('Hello')



//Write a program that reverses a string and prints it on the console.