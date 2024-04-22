function heroesOfCodeAndLogic7(array) {

    let numHeroes = Number(array.shift());

    let totalHeroes = {};

    for (let i = 0; i < numHeroes; i++) {
        let [hero, hp, mp] = array.shift().split(' ');
        hp = Number(hp);
        mp = Number(mp);

        totalHeroes[hero] = { hp, mp };

    }

    let maxHP = 100;
    let maxMP = 200;

    let command = array.shift();

    while (command !== 'End') {

        let tokens = command.split(' - ');
        let action = tokens.shift();

        let hero = tokens.shift();

        switch (action) {
            case 'CastSpell':

                let [manaNeeded, spellName] = tokens;
                manaNeeded = Number(manaNeeded);

                
                    if (totalHeroes[hero].mp >= manaNeeded) {

                        totalHeroes[hero].mp -= manaNeeded;
                        console.log(`${hero} has successfully cast ${spellName} and now has ${totalHeroes[hero].mp} MP!`);
                    } else {
                        console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                    }

                
                break;

            case 'TakeDamage':
                let [damage, attacker] = tokens;
                damage = Number(damage);

                

                    totalHeroes[hero].hp -= damage;

                    if (totalHeroes[hero].hp > 0) {

                        console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${totalHeroes[hero].hp} HP left!`);
                    } else {
                        console.log(`${hero} has been killed by ${attacker}!`);
                        delete totalHeroes[hero];
                    }

                
                break;

            case 'Recharge':

                let amount = tokens;
                amount = Number(amount);

                

                    let currMP = totalHeroes[hero].mp;

                    let rechargeMP = Math.min(maxMP - currMP, amount);
                    totalHeroes[hero].mp += rechargeMP;


                    console.log(`${hero} recharged for ${rechargeMP} MP!`);
                


                break;

            case 'Heal':

                let amountHp =tokens;
                amountHp = Number(amountHp)
                

                    let currHP = totalHeroes[hero].hp;

                    let rechargeHP = Math.min(maxHP - currHP, amountHp);
                    totalHeroes[hero].hp += rechargeHP;

                    console.log(`${hero} healed for ${rechargeHP} HP!`);
                
                break;

        }

        command = array.shift();
    }

    let entries = Object.entries(totalHeroes);

    for (let [hero, { hp, mp }] of entries) {

        console.log(`${hero}`);
        console.log(`  HP: ${hp}`);
        console.log(`  MP: ${mp}`);
    }

}

heroesOfCodeAndLogic7([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
    ]
    )
heroesOfCodeAndLogic7([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ]
    )

// On the first line of the standard input, you will receive an integer n – the number 
// of heroes that you can choose for your party. On the next n lines, the 
// heroes themselves will follow with their hit points and mana points
 //separated by a single space in the following format: 
// "{hero name} {HP} {MP}"
// -	HP stands for hit points and MP for mana points
// -	a hero can have a maximum of 100 HP and 200 MP
// After you have successfully picked your heroes, you can start playing the game.
//  You will be receiving different commands, each on a new line,
 //separated by " – ", until the "End" command is given. 
// There are several actions that the heroes can perform:

// "CastSpell – {hero name} – {MP needed} – {spell name}"
// •	If the hero has the required MP, he casts the spell,
// thus reducing his MP. Print this message: 
// o	"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
// •	If the hero is unable to cast the spell print:
// o	"{hero name} does not have enough MP to cast {spell name}!"

// "TakeDamage – {hero name} – {damage} – {attacker}"
// •	Reduce the hero HP by the given damage amount. 
//If the hero is still alive (his HP is greater than 0) print:
// o	"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
// •	If the hero has died, remove him from your party and print:
// o	"{hero name} has been killed by {attacker}!"

// "Recharge – {hero name} – {amount}"
// •	The hero increases his MP. If it brings the MP of the hero 
// above the maximum value (200), MP is increased to 200. 
//(the MP can't go over the maximum value).
// •	 Print the following message:
// o	"{hero name} recharged for {amount recovered} MP!"

// "Heal – {hero name} – {amount}"
// •	The hero increases his HP. If a command is given that would bring 
// the HP of the hero above the maximum value (100), 
//HP is increased to 100 (the HP can't go over the maximum value).
// •	 Print the following message:
// o	"{hero name} healed for {amount recovered} HP!"
// Input
// •	On the first line of the standard input, you will receive an integer n.
// •	On the following n lines, the heroes themselves will follow with their 
// hit points and mana points separated by a space in the following format.
// •	You will be receiving different commands, 
//each on a new line, separated by " – ", until the "End" command is given.
// Output
// •	Print all members of your party who are still alive,
 //in the following format (their HP/MP need to be indented 2 spaces):
// "{hero name}
//   HP: {current HP}
//   MP: {current MP}"
// Constraints
// •	The starting HP/MP of the heroes will be valid,
// 32-bit integers will never be negative or exceed the respective limits.
// •	The HP/MP amounts in the commands will never be negative.
// •	The hero names in the commands will always be
 //valid members of your party. No need to check that explicitly.
