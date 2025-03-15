class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] arr = {-1,-1};
        int n = nums.length;
        if(n == 0){
            return arr;
        }
        int start = 0;
        int end = n - 1;
        while(start <= end){
            int mid = start + (end - start)/2;
            if(nums[mid] == target){
                arr[0] = mid;
                end = mid - 1;
            }
            else if(nums[mid] < target){
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
        
        if(arr[0] == -1){
            return arr;
        }

        start = 0;
        end = n - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] == target) {
                arr[1] = mid;
                start = mid + 1;
            } else if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return arr;
    }
}