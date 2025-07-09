/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let writePointer = 1;
    
    for (let readPointer = 1; readPointer < nums.length; readPointer++) {
        if (nums[readPointer] !== nums[writePointer - 1]) {
            nums[writePointer] = nums[readPointer];
            writePointer++;
        }
    }
    
    return writePointer;
};