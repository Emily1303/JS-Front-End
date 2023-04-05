function inventory(input) {

    let arrayOfHeroes = [];

    for (const line of input) {
        let splittedInput = line.split(' / ');
        let [hero, level, items] = splittedInput;
        let heroObject = {
            hero, 
            level: Number(level), 
            items
        };

        arrayOfHeroes.push(heroObject);
    }

    let sortedArray = arrayOfHeroes.sort((levelA, levelB) => {
        return levelA.level - levelB.level;
    }).forEach((element) => {
        console.log(`Hero: ${element.hero}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items}`);
    })
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);