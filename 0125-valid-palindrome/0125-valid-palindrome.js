/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    return str.split("").reverse().join("") === str;
};