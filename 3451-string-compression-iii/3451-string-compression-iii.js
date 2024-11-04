var compressedString = function (word) {
    let comp = "";
    let i = 0;

    while (i < word.length) {
        let char = word[i]; // assign the current element to char.
        let count = 0;

        while (i < word.length && word[i] === char && count < 9) {
            count++;
            i++;
        }
        comp += count + char;
    }
    return comp
};