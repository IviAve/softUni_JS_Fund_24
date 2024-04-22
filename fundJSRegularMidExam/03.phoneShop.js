function phoneShop(array) {

    let phoneList = array.shift().split(', ');

    let command = array.shift();

    while (command !== 'End') {

        let tokens = command.split('- ');
        let action = tokens.shift();
        let modelPhone = tokens.shift();

        switch (action) {
            case 'Add ':
                
            if (!phoneList.includes(modelPhone)) {
                phoneList.push(modelPhone);

            }
                break;

                case 'Remove ':
                
            if (phoneList.includes(modelPhone)) {
                let idx = phoneList.indexOf(modelPhone);
                phoneList.splice(idx,1);

            }
                break;

                case 'Bonus phone ':
                    let newPhone = modelPhone.split(':');
                    let oldPhone = newPhone.shift();
                    let addPhone =newPhone.shift();

    
                if (phoneList.includes(oldPhone)) {
                    let idx = phoneList.indexOf(oldPhone);
                    phoneList.splice(idx + 1,0,addPhone);
    
                }
                    break;

                case 'Last ':
                
            if (phoneList.includes(modelPhone)) {
                let idx = phoneList.indexOf(modelPhone);
                let lastPhone = phoneList.splice(idx,1);
                phoneList.push(lastPhone);

            }
                break;
    
        }

        command = array.shift();
    }
    console.log(phoneList.join(', '));
}


phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"])

phoneShop(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"])

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"])


// Write a program that will help Kevin not to buy unnecessary phones.
//  You will receive a list of phones separated by
// ", " (comma and space). After that, until you receive "End",
// you will receive different commands, each on a new line. The commands are:
// •	"Add - {phone}":
// o	Add the given phone to the storage.
// o	If the phone already exists, you should skip this line.
// •	"Remove - {phone}":
// o	Remove the phone from the storage if it exists.
// o	Otherwise, ignore the command.
// •	"Bonus phone - {oldPhone}:{newPhone}":
// o	If the old phone exists, add the new phone after the old one.
// o	Otherwise, ignore the command.
// •	"Last - {phone}":
// o	If the given phone exists, you should change its position and put it last in your storage.
// o	Otherwise, ignore the command.
// Input
// •	On the first line - list of phones separated by ", " (comma and space)
// •	On the next lines - commands until you receive "End"
// Output
// •	After receiving the "End" command, print the phones in your storage, separated by ", " (comma and space).
