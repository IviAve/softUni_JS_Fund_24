function arenaTier(input) {
    const gladiators = {};
 
    for (const line of input) {
        if (line === 'Ave Cesar') {
            break;
        }
 
        if (!line.includes(' vs ')) {
            const [gladiator, technique, skill] = line.split(' -> ');
            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {};
            }
            if (!gladiators[gladiator].hasOwnProperty(technique)) {
                gladiators[gladiator][technique] = 0;
            }
            if (gladiators[gladiator][technique] < skill) {
                gladiators[gladiator][technique] = Number(skill);
            }
        } else if (line.includes(' vs ')) {
            const [gladiator1, gladiator2] = line.split(' vs ');
            if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)) {
                const firstTechniques = gladiators[gladiator1];
                const secondTechniques = gladiators[gladiator2];
 
                for (let technique of Object.entries(firstTechniques)) {
                    if (secondTechniques.hasOwnProperty(technique[0])) {
                        const firstPower = getTotalSkill(gladiators[gladiator1]);
                        const secondPower = getTotalSkill(gladiators[gladiator2]);
                        if (firstPower > secondPower) {
                            delete gladiators[gladiator2];
                            break;
                        } else if (secondPower > firstPower) {
                            delete gladiators[gladiator1];
                            break;
                        }
                    }
                }
            }
        }
    }
 
    Object.entries(gladiators)
        .sort((a, b) => getTotalSkill(b[1]) - getTotalSkill(a[1]) || a[0].localeCompare(b[0]))
        .forEach(kvp => {
            console.log(`${kvp[0]}: ${getTotalSkill(kvp[1])} skill`);
            Object.entries(kvp[1])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(kvp => console.log(`- ${kvp[0]} <!> ${kvp[1]}`));
        });
 
    function getTotalSkill(man) {
        let totalSkill = 0;
        Object.keys(man).forEach(technique => totalSkill += Number(man[technique]));
        return totalSkill;
    }
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]
    )
// arenaTier([
//     'Peter -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
//     ]
//     )


// Pesho is a pro gladiator, he is struggling to become master of the Arena. 
// You will receive several input lines in one of the following formats:
// "{gladiator} -> {technique} -> {skill}"
// "{gladiator} vs {gladiator}"
// The gladiator and technique are strings, the given skill will be an integer number.
//  You need to keep track of every gladiator. 
// When you receive a gladiator and his technique and skill, add him to the gladiator pool,
//  if he isn't present, else add his technique or update his skill, only if the current
//   technical skill is lower than the new value.
// If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier,
//  they duel with the following rules:
// Compare their techniques, if they got at least one in common, the gladiator with 
// better total skill points wins and the other is demoted from the tier -> remove him.
// If they don't have techniques in common, the duel isn't happening and both continue in the Season.
// You should end your program when you receive the command "Ave Cesar".
// At that point, you should print the gladiators, ordered by total skill in descending order,
//  then ordered by name in ascending order. Foreach gladiator prints their technique 
//  and skill ordered descending, then ordered by technique name in ascending order.
// Input / Constraints
// You will receive an array of strings as a parameter to your solution.
// •	The input comes in the form of commands in one of the formats specified above.
// •	Gladiator and technique will always be one-word string, containing no whitespaces.
// •	Skill will be an integer in the range [0, 1000].
// •	There will be no invalid input lines.
// •	The program ends when you receive the command "Ave Cesar".
// Output
// •	The output format for each gladiator is:
// "{gladiator}: {totalSkill} skill"
// "- {technique} <!> {skill}"
// Scroll down to see examples.
