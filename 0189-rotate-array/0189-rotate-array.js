/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;

    // Helper to reverse from start to end
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    // Step 1: Reverse entire array
    reverse(0, n - 1);

    // Step 2: Reverse first k
    reverse(0, k - 1);

    // Step 3: Reverse rest
    reverse(k, n - 1);   
};