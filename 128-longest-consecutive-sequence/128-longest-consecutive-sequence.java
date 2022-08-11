class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums == null || nums.length == 0) return 0;
        Set<Integer> set = new HashSet<Integer>();
        for(int i : nums) set.add(i);
        int ans = 0;
        for(int var : nums){
            int left = var - 1;
            int right = var + 1;
            
            set.remove(var);
            while(set.remove(left)) left--;
            while(set.remove(right)) right++;
            ans = Math.max(ans,right-left-1);
            if(set.isEmpty()) return ans;
        }
        return ans;
    }
}