function balikString(word) {
    var reversedWord = '';
    for (var i = word.length; i > 0; i--) {
        reversedWord = reversedWord + word[i - 1];
    }
    return reversedWord;
}

console.log(balikString('hello world!'));
