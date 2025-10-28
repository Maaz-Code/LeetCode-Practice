function countValidSelections(nums: number[]): number {
    let ans = 0;
    let sum = nums.reduce((a,b) => a + b, 0);
    let left = 0;
    let right = sum;

    for(let num of nums){
        if(num === 0){
            let diff = left - right;
            if(Math.abs(diff) == 0){
                ans = ans + 2;
            }
            else if(Math.abs(diff) == 1){
                ans = ans + 1;
            }
        } else {
            left = left + num;
            right = right - num;
        }
    }
    return ans;
};