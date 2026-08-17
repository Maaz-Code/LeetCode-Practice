/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let arr = [];
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    for(let i = min; i <= max; i++){
        if(!nums.includes(i)){
            arr.push(i);
        }
    }
    return arr;
};