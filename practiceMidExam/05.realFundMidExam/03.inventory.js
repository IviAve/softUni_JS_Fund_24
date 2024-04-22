function inventory(input) {

  let collectingItems = input.shift().split(', ');

  let command = input.shift();

  while (command !== 'Craft!') {

    let tokens = command.split(' - ');

    let action = tokens.shift();
    let item = tokens.shift();

    switch (action) {
      case 'Collect':

        if (!collectingItems.includes(item)) {
          collectingItems.push(item);
        }
        break;
      case 'Drop':
        if (collectingItems.includes(item)) {
          let idx = collectingItems.indexOf(item);
          collectingItems.splice(idx, 1)

        }
        break;
      case 'Combine Items':
        let upgrade = item.split(':');
        let searchItem = upgrade.shift();
        let upgrades = upgrade.shift();
        if (collectingItems.includes(searchItem)) {
          let idx = collectingItems.indexOf(searchItem);

          collectingItems.splice(idx + 1, 0, `${upgrades}`);
        }
        break;
      case 'Renew':
        if (collectingItems.includes(item)) {
          let idx = collectingItems.indexOf(item);
          collectingItems.splice(idx, 1,)
          collectingItems.push(item)
          break;

        }

    }
    command = input.shift();
  }

  console.log(collectingItems.join(', '));
}


inventory([
  'Iron, Wood, Sword',
  'Collect - Gold',
  'Drop - Wood',
  'Craft!'
]
)
inventory([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!'
]
)




// Input / Constraints
// You will receive a journal with some collecting items, separated with a comma and a space (", ").
//  After that, until receiving "Craft!" you will be receiving different commands split by " - ":
// •	"Collect - {item}" - you should add the given item to your inventory.
//  If the item already exists, you should skip this line.
// •	"Drop - {item}" - you should remove the item from your inventory if it exists.
// •	"Combine Items - {old_item}:{new_item}" - you should check if the old item exists.
//  If so, add the new item after the old one. Otherwise, ignore the command.
// •	"Renew – {item}" – if the given item exists, you should change its
// position and put it last in your inventory.
// Output
// After receiving "Craft!" print the items in your inventory, separated by ", ".
