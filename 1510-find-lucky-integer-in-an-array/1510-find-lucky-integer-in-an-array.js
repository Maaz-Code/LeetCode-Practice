/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const map = {};

    // Count frequency of each number
    for (let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    let maxLucky = -1;

    // Check for lucky integers
    for (let key in map) {
        const num = parseInt(key);
        if (map[num] === num) {
            maxLucky = Math.max(maxLucky, num);
        }
    }
    return maxLucky;
};