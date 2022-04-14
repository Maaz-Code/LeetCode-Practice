class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int a=0, b=numbers.length-1;
        for(int i=0; i<numbers.length; i++){
            if(numbers[a]+numbers[b]==target){
                return new int[] {a+1,b+1}; //because array is 1 indexed and not 0 indexed
            }else if(numbers[a]+numbers[b]>target){
                b--;    //decrement the last pointer by one if sum of front and rear is greater than our target
            }else{
                a++;    //increment the front pointer by one if sum of front and rear is less than our target
            }
        }
        return new int[] {a+1,b+1};
    }
}