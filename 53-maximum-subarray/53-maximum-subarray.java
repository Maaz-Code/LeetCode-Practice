class Solution {
    public int maxSubArray(int[] nums) {
        int max_sum = -1000000007;
        int curr_sum = 0;
        for(int i = 0;i < nums.length; i++){
            curr_sum = curr_sum + nums[i];
            if(max_sum < curr_sum) {
                max_sum = curr_sum;
            }
            if(curr_sum < 0){
                curr_sum = 0;
            }
        }
        return max_sum;
    }
}
//This is the Kadane's algorithm we did it in O(N);