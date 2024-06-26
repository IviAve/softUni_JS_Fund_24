function legendaryFarming(input) {
    
    let array = input.split(' ');

    let keyMaterials = {shards: 0, fragments: 0, motes: 0, };
    let junkMats = {};
    let legendaries = {shards: 'Shadowmourne',fragments: 'Valanyr', motes: 'Dragonwrath', }

    for (let i = 0; i < array.length; i+=2) {
        let qty = Number(array[i]);
        let material = array[i + 1].toLowerCase();

        if (material in keyMaterials) {
            keyMaterials[material] += qty;
            if (keyMaterials[material] >= 250) {
                let legendary = legendaries[material];
                console.log(`${legendary} obtained!`);
                keyMaterials[material] -= 250;
                break;
            }
        }else{

            if (material in junkMats) {
                junkMats[material] += qty;
            }else{
                junkMats[material] = qty;
            }
        }
    }

    let keyMatEntr = Object.entries(keyMaterials).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let junkEntr = Object.entries(junkMats).sort((a,b)=> a[0].localeCompare(b[0]));

    for (let [keyMaterial,qty] of keyMatEntr) {
        console.log(`${keyMaterial}: ${qty}`);
    }
    for (let [junkMaterial,qty] of junkEntr) {
        console.log(`${junkMaterial}: ${qty}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')

// You’ve beaten all the content and the last thing left to accomplish is to own a legendary item. 
// However, it’s a tedious process and requires quite a bit of farming. 
// Anyway, you are not too pretentious – any legendary will do. The possible items are:
// •	"Shadowmourne" – requires 250 Shards
// •	"Valanyr" – requires 250 Fragments
// •	"Dragonwrath" – requires 250 Motes
// "Shards", "Fragments", and "Motes" are the key materials, all else is junk. 
// You will be given lines of input in the format: 
// "{quantity1} {material1} {quantity2} {material2} … {quantityN} {materialN}"
// Keep track of the key materials - the first that reaches the 250 mark wins the race.
//  At that point, print the corresponding legendary obtained. 
// Then, print the remaining shards, fragments, motes, ordered by quantity in descending order,
//  then by name in ascending order, each on a new line. Finally, print the collected junk items,
//   in alphabetical order.
// Input
// •	Each line comes in the following format:
// {quantity1} {material1} {quantity2} {material2} … {quantityN} {materialN}
// Output
// •	On the first line, print the obtained item in format: "{Legendary item} obtained!"
// •	On the next three lines, print the remaining key materials in descending order by quantity
// o	If two key materials have the same quantity, print them in alphabetical order
// •	On the final several lines, print the junk items in alphabetical order
// o	All materials are printed in format "{material}: {quantity}"
// o	All output should be lowercase, except the first letter of the legendary
