class Solution {
    public boolean isPowerOfThree(int n) {
       return (Math.log10(n)/Math.log10(3)) % 1 == 0;
    }
}

//Here if n is actually a exact power of 3 then i must be integer . so i%1 will be equal to 0.