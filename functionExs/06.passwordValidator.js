function passwordValidator(pass) {
   let  isValidLength = checkLength(pass);
   let isValidLetters = checkLetters(pass);
   let isValidDigits = checkDigits (pass);

   if (isValidLength === true && isValidLetters === true && isValidDigits === true) {
    
    console.log('Password is valid');
   }


    function checkLength(pass) {
        if (pass.length < 6 || pass.length > 10) {
            console.log('Password must be between 6 and 10 characters');
            return false;
        }
        return true;
    }

    function checkLetters(params) {

        let pattern = /^[A-Za-z0-9]+$/;
        let isValid = pattern.test(pass)

        if (isValid) {
            return true;
        }
        console.log('Password must consist only of letters and digits');
        return false;
    }

    function checkDigits(pass) {
        let pattern = /[0-9]{2,}/;
        let isValid = pattern.test(pass);

        if (isValid) {
            return true;
        }

        console.log('Password must have at least 2 digits');
        return false;
    }


}

passwordValidator('logIn')

passwordValidator('MyPass123')

passwordValidator('Pa$s$s')

// Write a function that checks if a given password is valid. Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"
