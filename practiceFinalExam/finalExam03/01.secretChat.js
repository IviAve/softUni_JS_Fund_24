function secretChat(array) {
  let text = array.shift();

  let command = array.shift();                     
  
  // secretChat([
  //   'Hiware?uiy',
  //   'ChangeAll:|:i:|:o',
  //   'Reverse:|:?uoy',
  //   'Reverse:|:jd',
  //   'InsertSpace:|:3',
  //   'InsertSpace:|:7',
  //   'Reveal'
  // ]
  // )

  let tempStr = '';

  while (command !== 'Reveal') {
    let tokens = command.split(':|:');
    let action = tokens.shift();

    switch (action) {
      case 'InsertSpace':

        let idx = Number(tokens.shift());
        let insert = ' ';

        text = text.slice(0, idx) + insert + text.slice(idx);
        

        console.log(text);
        break;


      case 'Reverse':
        let substring = tokens.shift();

        if (text.includes(substring)) {

          temp = text.replace(substring, '');
          let reversedStr = substring.split('').reverse().join('');
          text = temp.concat(reversedStr);

          console.log(text);

        } else {
          console.log('error');
        }

        
        break;

      case 'ChangeAll':

        let substr = tokens.shift();
        let replacement = tokens.shift();

        if (text.includes(substr)) {

          while (text.includes(substr)) {
            temp = text.replace(substr, replacement);
            text = temp;

          }

        }
        console.log(text);
        break;

    }

    command = array.shift();
  }
  console.log(`You have a new text message: ${text}`);

}

// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
//   ]
//   )
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )

// On the first line of the input, you will receive the concealed message.
//  After that, until the "Reveal" command is given, you will receive strings 
//  with instructions for different operations that need to be performed upon the
//   concealed message to interpret it and reveal its actual content.
//    There are several types of instructions, split by ":|:"
// •	"InsertSpace:|:{index}":
// o	Inserts a single space at the given index. The given index will always be valid.
// •	"Reverse:|:{substring}":
// o	If the message contains the given substring, cut it out,
 //reverse it and add it at the end of the message. 
// o	If not, print "error".
// o	This operation should replace only the first occurrence of the given substring 
// if there are two or more occurrences.
// •	"ChangeAll:|:{substring}:|:{replacement}":
// o	Changes all occurrences of the given substring with the replacement text.
// Input / Constraints
// •	On the first line, you will receive a string with a message.
// •	On the following lines, you will be receiving commands, split by ":|:".
// Output
// •	After each set of instructions, print the resulting string. 
// •	After the "Reveal" command is received, print this message:
// "You have a new text message: {message}"
