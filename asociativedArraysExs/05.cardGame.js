
    function cardGame(input) {
        const typeMultiplier = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };

        const players = {};
    
        for (const line of input) {
            const [name, cardsStr] = line.split(': ');
            const cards = cardsStr.split(', ');
    
            if (!players.hasOwnProperty(name)) {
                players[name] = new Map();
            }
    
            for (const card of cards) {
                let power, type;
    
                // If the card has two characters (e.g., '10S'), split it accordingly
                if (card.length === 3) {
                    power = card.slice(0, 2);
                    type = card.slice(2);
                } else {
                    power = card[0];
                    type = card[1];
                }
    
                const value = (getCardValue(power) * typeMultiplier[type]);
    
                if (!players[name].has(power + type)) {
                    players[name].set(power + type, value);
                }
            }
        }
    
        for (const name in players) {
            const totalValue = [...players[name].values()].reduce((acc, curr) => acc + curr, 0);
            console.log(`${name}: ${totalValue}`);
        }
    
        function getCardValue(power) {
            const values = {
                '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
                'J': 11, 'Q': 12, 'K': 13, 'A': 14
            };
            return values[power];
        }
    }


cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    )

// You are given a sequence of people and for every person what cards he draws from the deck. 
// The input will be an array of strings. Each string will be in the format:
// {personName}: {PT, PT, PT,… PT}
// Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card 
// and T (S, H, D, C) is the type. The name can contain any ASCII symbol except ':'. 
// The input will always be valid and in the format described, there is no need to check it.
// A single person cannot have more than one card with the same power and type, 
// if he draws such a card he discards it. The people are playing with multiple decks. 
// Each card has a value that is calculated by the power multiplied by the type. 
// Powers 2 to 10 have the same value and J to A are 11 to 14. 
// Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
// Finally print out the total value each player has in his hand in the format:
// {personName}: {value}
