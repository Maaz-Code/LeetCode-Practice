/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let word = "a";
    while (word.length < k) {
        let next = "";
        // Generate next string
        for (let ch of word) {
            next += ch === 'z' ? 'a' : String.fromCharCode(ch.charCodeAt(0) + 1);
        }
        word += next;
    }
    return word[k - 1];
};