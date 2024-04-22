function solve(array) {
    
    let heroes = {};
     let command = array.shift();

     while (command !== 'End') {
        

        let [action, heroName, spellName] = command.split(' ');

        if (action === "Enroll") {
            if (!heroes.hasOwnProperty(heroName)) {
                heroes[heroName] = [];
            } else {
                console.log(`${heroName} is already enrolled.`);
            }
        } else if (action === "Learn") {
            if (heroes.hasOwnProperty(heroName)) {
                if (!heroes[heroName].includes(spellName)) {
                    heroes[heroName].push(spellName);
                } else {
                    console.log(`${heroName} has already learnt ${spellName}.`);
                }
            } else {
                console.log(`${heroName} doesn't exist.`);
            }
        } else if (action === "Unlearn") {
            if (heroes.hasOwnProperty(heroName)) {
                if (heroes[heroName].includes(spellName)) {
                    let index = heroes[heroName].indexOf(spellName);
                    heroes[heroName].splice(index, 1);
                } else {
                    console.log(`${heroName} doesn't know ${spellName}.`);
                }
            } else {
                console.log(`${heroName} doesn't exist.`);
            }
        }


        command = array.shift();

     }
     console.log("Heroes:");
    Object.entries(heroes).forEach(([hero, spells]) => {
        console.log(`== ${hero}: ${spells.join(', ')}`);
    });
    
}

solve((["Enroll Stefan",
"Enroll Peter",
"Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn John ItShouldNotWork",
"Unlearn George Dispel",
"Unlearn Stefan ItShouldWork",
"End"])
)
solve((["Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn Stefan ItShouldWork",
"Unlearn Stefan NotFound",
"End"])
)
solve((["Enroll Stefan",
"Enroll Peter",
"Enroll John",
"Learn Stefan Spell",
"Learn Peter Dispel",
"End"])
)


// Create a program that keeps track of enrolled heroes and their collection of spells (spellbook).
//   You will be receiving the following commands until you receive the command "End":
// •	"Enroll {HeroName}":
// o	Adds the hero to your collection of heroes.
// o	If the hero is already present in your collection, print: "{HeroName} is already enrolled."

// •	"Learn {HeroName} {SpellName}":
// o	Adds the spell to the hero's spellbook.
// o	If the hero does not exist in the collection, print: "{HeroName} doesn't exist."
// o	If the hero already has the spell in
//  his spellbook, print: "{HeroName} has already learnt {SpellName}."

// •	"Unlearn {HeroName} {SpellName}":
// o	Removes the spell from the hero's spellbook.

// o	If the hero doesn't exist in the collection, print: "{HeroName} doesn't exist."
// o	If the spell doesn't exist in the hero's spellbook, print: "{HeroName} doesn't know {SpellName}."
// o	
// After receiving the "End" command, print all the heroes:
// "Heroes:
// == {name1}: {spell1}, {spell2}, {spelln}
// == {name2}: {spell1}, {spell2}, {spelln}
// …
// == {nameN}: {spell1}, {spell2}, {spelln}"
// Input / Constraints
// 	You will be receiving lines until you receive the "End" command.
// Output
// 	Print the heroes in the format described above.
