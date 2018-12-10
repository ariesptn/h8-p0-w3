function cube2(num) {
    let result = [];
    let counter = 1;
    for (let i = 0; i < num; i++) {
        result.push([]);
    }
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            result[j].push(counter);
            counter++;
        }
    }
    return result;
}
function cube2a(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        result.push([])
        for (let j = 1; j <= num; j++) {
            result[i - 1].push(i + num * j - num);
        }
    }
    return result;
}
function cube3(num) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = [];
    let counter = 0;
    for (let i = 0; i < num; i++) {
        result.push([]);
    }
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            result[j].push(alphabet[counter % alphabet.length]);
            counter++;
        }
    }
    return result;
}
console.log(cube2(10));
console.log(cube2a(10));
console.log(cube3(10));
