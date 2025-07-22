/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let set = new Set();
    let sum = 0, max = 0, left = 0, right = 0;
    while(right < nums.length){
        while(set.has(nums[right])){
            set.delete(nums[left]);
            sum = sum - nums[left];
            left++;
        }
        set.add(nums[right]);
        sum = sum + nums[right];
        max = Math.max(max, sum);
        right++;
    }
    return max;
};