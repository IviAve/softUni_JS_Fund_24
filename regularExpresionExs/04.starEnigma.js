function starEnigma(array) {
   
    let msgCount = Number(array.shift());
    let decryptMsgs = [];
    let starPattern = /[star]/gi;

    for (let i = 0; i < msgCount; i++) {
        let msg = array[i];
        let decryptedMsg = '';

        let matches = msg.match(starPattern);

        if(matches){

            let count = matches.length;

            for (let char of msg) {
                let code = char.charCodeAt();

                code -= count;

                let newChar = String.fromCharCode(code);
                decryptedMsg += newChar;
            }

        }else{
            decryptedMsg = msg;
        }
        decryptMsgs.push(decryptedMsg);

    }
    let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;

    let attakedPlanets = [];
    let destroedPlanets = [];

    for (let msg of decryptMsgs) {
        
        let matches = msg.match(planetPattern);

        if (matches) {

            let {name,type} = matches.groups;
          

            if (type === 'A') {
                attakedPlanets.push(name);

            }else{
                destroedPlanets.push(name);

            }
            
        }
    }

    let sortedAttacPlanet = attakedPlanets.sort((a,b) => a.localeCompare(b));
    let sortedDestroedPlanet = destroedPlanets.sort((a,b) => a.localeCompare(b));


    console.log(`Attacked planets: ${attakedPlanets.length}`);
    attakedPlanets.forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroedPlanets.length}`);
    destroedPlanets.forEach(planet => console.log(`-> ${planet}`));

}



starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']
)
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
)


// The war is at its peak, but you, young Padawan, can turn the tides with your programming skills.
// You are tasked to create a program to decrypt the messages of The Order and prevent the death of hundreds of lives. 
// You will receive several messages, which are encrypted using the legendary star enigma.
// You should decrypt the messages, following these rules:
//     To properly decrypt a message, you should count all the letters [s, t, a, r] – case 
//     insensitive and remove the count from the current ASCII value of each symbol of the encrypted message.
// After decryption:
// Each message should have a planet name, population, attack type('A', as an attack or 'D', as destruction), and soldier count.
// The planet name starts after '@' and contains only letters from the Latin alphabet. 
// The planet population starts after ':' and is an Integer;
// The attack type may be "A"(attack) or "D"(destruction) and must be surrounded by "!"(exclamation mark).
// The soldier count starts after "->" and should be an Integer.
// The order in the message should be: planet name -> planet population -> attack type -> soldier count.
// Each part can be separated from the others by any character except: '@', '-', '!', ':' and '>'.
//     Input / Constraints
// •	The first line holds n – the number of messages– integer in the range[1…100];
// •	On the next n lines, you will be receiving encrypted messages.
//     Output
// After decrypting all messages, you should print the decrypted information in the following format:
// First print the attacked planets, then the destroyed planets.
// "Attacked planets: {attackedPlanetsCount}"
// "-> {planetName}"
// "Destroyed planets: {destroyedPlanetsCount}"
// "-> {planetName}"
// The planets should be ordered by name alphabetically.
