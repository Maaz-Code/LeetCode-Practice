/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    const regex = /^(?=.*[aeiouAEIOU])(?=.*[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ])[a-zA-Z0-9]{3,}$/;
    return regex.test(word);
};