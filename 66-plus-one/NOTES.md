**Wrong Output approach:**
```
int sum = 1;
int[] ans = new int[digits.length];
for(int i = 0; i < digits.length; i++){
sum = sum + digits[i];
}
for(int i = ans.length-1; i >= 0; i--){
int r = sum % 10;
ans[i] = r;
sum = sum/10;
}
return ans;
```
**Correct approach:**
Start loop from end of the array and if encounter digit 9 then set it to 0 and move to the next number. If any number is not equal to 0 then increment it by 1. Atlast check if the there was just 9 in array which means there will be just 0. So increase the size of array set first position to 1. Return the new array in such case other wise if is not checked and hence return the modified digits array.