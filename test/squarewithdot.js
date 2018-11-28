function topDown(num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += '*';
    }
    return result + '\n';
}
function middle(num) {
    let result = '*';
    for (let i = 0; i < (num / 2) - 2; i++) {
        result += ' ';
    }
    result += '+';
    for (let i = 0; i < (num / 2) - 2; i++) {
        result += ' ';
    }
    result += '*\n';
    return result;
}
function inBetween(num) {
    let result = '';
    for (let j = 0; j < (num / 2) - 2; j++) {
        result += '*';
        for (let i = 0; i < num - 2; i++) {
            result += ' ';
        }
        result += '*\n';
    }
    return result;
}
function drawSquareWithDot(num) {
    if (num == 1) {
        return '*\n';
    } else if (num % 2 === 0) {
        return 'Harus ganjil';
    } else {
        return topDown(num) + inBetween(num) + middle(num) + inBetween(num) + topDown(num);
    }
}

console.log(drawSquareWithDot(11));
