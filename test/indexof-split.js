function findIndex(string, searchTerm) {
    let i = 0;
    while (i < string.length - searchTerm.length && string.substring(i, i + searchTerm.length) !== searchTerm) {
        i++;
    }
    if (i > string.length - searchTerm.length) {
        i = -1;
    }
    return i;
}

function mySplit(string, separator) {
    let strings = [''];
    let i = 0;
    while (i < string.length) {
        if (string.substring(i, i + separator.length) !== separator) {
            strings[strings.length - 1] += string[i];
        } else {
            i = i + separator.length;
            if (i < string.length) {
                strings.push(string[i]);
            }
        }
        i++;
    }
    return strings;
}

console.log(findIndex('kambingkucingtikus', 's'));
console.log(mySplit('kambingkucingtikus', 'tiku'));
