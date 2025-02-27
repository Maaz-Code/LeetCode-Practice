/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let ans = 0;
    for(let i of nums){
        ans ^= i;
    }
    return ans;
};