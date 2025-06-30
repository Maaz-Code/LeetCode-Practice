/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = new Map();
    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }
    let maxLen = 0;
    for(let [key, value] of map.entries()){
        if(map.has(key + 1)){
            let total = value + map.get(key + 1);
            maxLen = Math.max(maxLen, total);
        }
    }
    return maxLen;
};