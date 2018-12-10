function cube(num) {
    let result = [];
    let currentNumber = 1;
    for (let i = 0; i < num; i++) {
        result.push([]);
        for (let j = 0; j < num; j++) {
            result[i].push(currentNumber);
            currentNumber++;
        }
    }
    return result;
}

console.log(cube(5));
