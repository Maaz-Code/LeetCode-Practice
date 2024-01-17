/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let total = (n*(n+1))/2;
    for(let i = 0; i < n; i++){
        total = total - nums[i];
    }
    return total;
};