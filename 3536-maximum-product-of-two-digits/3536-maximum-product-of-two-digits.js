/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let p = 1;
    let arr = String(n).split('').sort((a,b) => b - a);
    return p * arr[0] * arr[1];
};