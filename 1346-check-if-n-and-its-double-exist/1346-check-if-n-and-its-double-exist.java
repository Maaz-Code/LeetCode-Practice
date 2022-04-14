class Solution {
    public boolean checkIfExist(int[] arr) {
        boolean ans = false;
        for(int i=0; i<arr.length; i++) {
            for(int j=i+1; j<arr.length; j++){
                // if (arr[i] == 0) {
                //     break;
                // }
                if(arr[i] == 2*arr[j] || (arr[i] == arr[j]/2 && arr[j]%2 == 0)){
                    ans = true;
                    break;
                }
            }
        }
        return ans;
    }
}