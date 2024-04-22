function tseamAccount(array) {

    let gameCount = array.shift().split(' ');

    let command = '';

    while (array.length > 0) {

        let elements = array.shift().split(' ');
        let action = elements.shift();
        let game = elements.shift();

        switch (action) {
            case 'Install':
                if (!gameCount.includes(game)) {
                    gameCount.push(game);

                }
                break;
            case 'Uninstall':
                if (gameCount.includes(game)) {
                    let idx = gameCount.indexOf(game);
                    gameCount.splice(idx, 1);

                }
                break;
            case 'Update':
                if (gameCount.includes(game)) {
                    let idx = gameCount.indexOf(game);
                    gameCount.splice(idx, 1);
                    gameCount.push(game);

                }
                break;

            case 'Expansion':
                let expansionGame = game.split('-');
                let sameGame = expansionGame.shift();
                let exp = expansionGame.shift();

                if (gameCount.includes(sameGame)) {

                    let idx = gameCount.indexOf(sameGame);
                    gameCount.splice(idx + 1, 0, (`${sameGame}:${exp}`));

                }
                break;
        }
        command++;
    }
    console.log(gameCount.join(' '));
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
)

tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
)

// As a gamer, Peter has Tseam Account. He loves to buy new games.
// You are given Peter's account with all of his games-> strings, separated by space.
//  Until you receive "Play!" you will be receiving commands which Peter does with his account.
// You may receive the following commands:
// •	Install {game} - add the game at the last position in the account,
//but only if it isn't installed already.
// •	Uninstall {game} - delete the game if it exists.
// •	Update {game} - update the game if it exists and place it in the last position.
// •	Expansion {game}-{expansion} - check if the game exists and insert after it the
//  expansion in the following format: "{game}:{expansion}";
// Input
// •	On the first input line you will receive Peter`s account - a sequence of game names,
//separated by space.
// •	Until you receive "Play!" you will be receiving commands.
// Output
// •	As output, you must print Peter`s Tseam account.
// Constraints
// •	The command will always be valid.
// •	The game and expansion will be strings and will contain any character, except '-'.
// •	Allowed working time / memory: 100ms / 16MB.
// Multidimensional Arrays
// We will mainly work with 2-dimensional arrays. The concept is as simple as
// working with a simple 1-dimensional array. It is just an array of arrays.
