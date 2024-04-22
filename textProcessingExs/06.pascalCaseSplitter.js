function pascalCaseSplitter(input) {
    
        //console.log(input.split(/(?=[A-Z])/).join(", "));



        let arr = [];
    let index = 1;
    let end = input.length;
    let cut = 0;
 
    while (index < end) {
        if (input.charCodeAt(index) >= 65 && input.charCodeAt(index) <= 90) {
            arr.push(input.slice(cut, input.length))
            cut = index;
        }
        index++;
    }
 
    arr.push(input.slice(cut, input.length));
 
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i - 1].replace(arr[i], '');
    }
    
    console.log(arr.join(', '));
    
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')

// You will receive a single string. 
// This string is written in PascalCase format.
//  Your task here is to split this string by every word in it. 
// Print them joined by comma and space.
