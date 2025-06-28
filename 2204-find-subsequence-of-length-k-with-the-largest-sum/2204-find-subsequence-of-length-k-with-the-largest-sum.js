/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let arr = [...nums.entries()];
    return arr.sort((a,b) => b[1] - a[1])
            .slice(0,k)
            .sort((a,b) => a[0] - b[0])
            .map(([i,v]) => v);
};