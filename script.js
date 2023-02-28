function randNumberGen(num) {
    return Math.floor(Math.random() * num)
}

const treasureRewards = {
    weaponItem: ['Common Sword', 'Common Bow', 'Common Axe', 'Common Dagger', 'Rare Sword', 'Rare Bow', 'Rare Axe', 'Rare Dagger', 'Legendary Sword', 'Legendary Bow', 'Legendary Axe', 'Legendary Dagger'],
    junkItem: ['An old sponge', "John's diary", 'The Legendary Donkey Statue', 'Grandmas Wooden Spoon', 'White Plate', 'Fire Orb', 'Suspicious Mushroom'],
}

let messageBuilder = ['You have acquired the following items!',]

for(let rewards in treasureRewards) {
    let rewardChoice = randNumberGen(treasureRewards[rewards].length);
    // console.log(rewardChoice);

    switch (rewards) {
        case 'weaponItem':
            messageBuilder.push(`Weapon Earned: ${treasureRewards[rewards][rewardChoice]}`);
            break
        case 'junkItem': 
            messageBuilder.push(`Item Earned: ${treasureRewards[rewards][rewardChoice]}`);
            break
        default: 
            messageBuilder.push('You opened a chest right?')
    }
}

messageBuilder.push(`Gold Earned: ${Math.ceil(Math.random() * 50)}`);

const rewardConclusion = messageBuilder.join('\n');

console.log(rewardConclusion);

