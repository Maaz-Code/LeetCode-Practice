Brute force: using 3 loops in O(n^3):
​
```
for(int i = 0; i < n - 2;  i++){
for(int j = i + 1;  j < n - 1;  j++) {
for(int k = j  + 1;  k < n;  k++) {
if(arr[i] + arr[j] + arr[k] == 0)
{ return triplets }
```
​
Another method is using Hashing with O(n^2) and linear space,
​
**Used method here is sorting then creating arraylist inside a Set and using two pointers, one from start and one from end. Inside loop one pointer increments and other decrements and the desired array is converted to list.**