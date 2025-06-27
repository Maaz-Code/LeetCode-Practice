/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    nums.forEach((num, index, arr) => {
        arr[index] = Math.abs(num*num);
    });
    return nums.sort((a,b) => a - b);
};