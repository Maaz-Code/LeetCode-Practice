class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int counter = 0;
        int ans = counter;
        for(int i = 0; i<nums.length; i++){
            if(nums[i] != 0){
                counter += 1;
                if(ans < counter) {
                    ans = counter;
                }
            }
            else {
                counter = 0;
            }
        }
        return ans;
    }
}