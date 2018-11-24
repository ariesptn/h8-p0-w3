function targetTerdekat(arr) {
    let oIndex = -1;
    let xLeftIndex = -1;
    let xRightIndex = -1;
    let leftDistance = 2 ^ 16 - 1;
    let rightDistance = 2 ^ 16 - 1;

    //find index of o
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            oIndex = i;
            break;
        }
    }
    //if o is not found
    if (oIndex === -1) {
        return 0;
    }
    //find index of nearest x to the left of o
    for (let i = oIndex - 1; i >= 0; i--) {
        if (arr[i] === 'x') {
            xLeftIndex = i;
            break;
        }
    }
    //find index of nearest x to the right of o
    for (let i = oIndex + 1; i < arr.length; i++) {
        if (arr[i] === 'x') {
            xRightIndex = i;
            break;
        }
    }
    //if x is not found
    if (xLeftIndex === -1 && xRightIndex === -1) {
        return 0;
    }
    //calculate and compare distance
    if (xLeftIndex !== -1) {
        leftDistance = oIndex - xLeftIndex;
    }
    if (xRightIndex !== -1) {
        rightDistance = xRightIndex - oIndex;
    }
    if (leftDistance < rightDistance) {
        return leftDistance;
    } else {
        return rightDistance;
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat(['x', ' ', 'o', ' ', ' ', 'x'])); //2
