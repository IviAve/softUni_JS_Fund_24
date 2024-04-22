function santasSecretHelper(input) {
  
    let key = Number(input.shift());
    let goodChildren = [];

    input.forEach(message => {
        let decryptedMessage = '';
        for (let i = 0; i < message.length; i++) {
            let char = message[i];
            //if (char.charCodeAt() >= 65 && char.charCodeAt() <= 122) {
                char = String.fromCharCode(char.charCodeAt() - key);
            //}
            decryptedMessage += char;
        }

        let regex = /@([A-Za-z]+)[^-!:@>]+!([GN])!/g;
        let match = regex.exec(decryptedMessage);
        while (match !== null) {
            let name = match[1];
            let behavior = match[2];
            if (behavior === 'G') {
                goodChildren.push(name);
            }
            match = regex.exec(decryptedMessage);
        }
    });

    console.log(goodChildren.join('\n'));
}

santasSecretHelper(['3',
'CNdwhamigyenumje$J$',
'CEreelh-nmguuejnW$J$',
'CVwdq&gnmjkvng$Q$',
'end']
)
santasSecretHelper(['3',
"N}eideidmk$'(mnyenmCNlpamnin$J$",
'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
'ppqmkkkmnolmnnCEhq/vkievk$Q$',
'yyegiivoguCYdohqwlqh/kguimhk$J$',
'end'])


// After the successful second Christmas, Santa needs to gather information about the behavior 
// of children to plan the presents for next Christmas. He has a secret helper, 
// who is sending him encrypted information. Your task is to decrypt it and create
//  a list of the good children. 
// You will receive an integer, which represents a key, and afterward some messages, 
// which you must decode by subtracting the key from the value of each character. After the decryption,
//  to be considered a valid match, a message should:
// -	Have a name, which starts after '@' and contains only letters from the Latin alphabet
// -	Have a behavior type - "G"(good) or "N"(naughty) and must be surrounded by "!" (exclamation mark).
// The order in the message should be: child’s name -> child's behavior. 
// They can be separated from the others by any character except: '@', '-', '!', ':' and '>'. 
// You will be receiving messages until you are given the "end" command. Afterward, print the names 
// of the children, who will receive a present, each on a new line. 
// Input / Constraints
// •	The first line holds n – the number which you have to subtract from the characters – 
// integer in the range [1…100];
// •	On the next lines, you will be receiving encrypted messages.
// Output
// Print the names of the children, each on a new line
