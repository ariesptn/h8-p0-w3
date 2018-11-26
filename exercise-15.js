function groupAnimals(animals) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let results = [];
    for (let i = 0; i < alphabet.length; i++) {
        let pushed = false;
        for (let j = 0; j < animals.length; j++) {
            if (alphabet[i] === animals[j][0]) {
                if (!pushed) {
                    results.push([]);
                    pushed = true;
                }
                results[results.length - 1].push(animals[j]);
            }
        }
    }
    return results;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
console.log(groupAnimals(["ayam", "kucing", "bebek", "bangau", "zebra"]));
// [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]
