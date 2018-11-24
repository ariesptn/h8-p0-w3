function groupAnimals(animals) {
    let abjad = 'abcdefghijklmnopqrstuvwxyz';
    let hasil = [];
    for (let i = 0; i < abjad.length; i++) {
        let pushed = false;
        for (let j = 0; j < animals.length; j++) {
            if (abjad[i] === animals[j][0]) {
                if (!pushed) {
                    hasil.push([]);
                    pushed = true;
                }
                hasil[hasil.length - 1].push(animals[j]);
            }
        }
    }
    return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
console.log(groupAnimals(["ayam", "kucing", "bebek", "bangau", "zebra"]));
// [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]
