/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;

    let removed = nums.splice(n - k);  //last k elements
    return nums.unshift(...removed);   //add them in front
};