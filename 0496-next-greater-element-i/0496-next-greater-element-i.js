/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = new Map();

    for (let num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) {
            let smaller = stack.pop();
            map.set(smaller, num);
        }
        stack.push(num);
    }

    // Fill the rest with -1 (no next greater)
    while (stack.length) {
        map.set(stack.pop(), -1);
    }

    // Build result for nums1 from the map
    return nums1.map(num => map.get(num));
};