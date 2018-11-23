function pasanganTerbesar(num) {
    var max = 0;
    numString = num.toString();
    for (var i = 0; i < numString.length - 1; i++) {
        currentIteration = parseInt(numString.substring(i, i + 2));
        if (max < currentIteration) {
            max = currentIteration;
        }
    }
    return max;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
