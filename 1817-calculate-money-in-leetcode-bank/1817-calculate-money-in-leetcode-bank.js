/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let sum = 0;
    let start = 1;  // Monday’s starting deposit
    let count = 0;

    while (count < n) {
        // Each week
        for (let i = 0; i < 7 && count < n; i++) {
            sum += start + i;
            count++;
        }
        start++; // Next week starts with +1 more
    }

    return sum;
};