**My method which failed for three digit numbers:**
```
while(n > 3){
n = n/3;
}
if(n == 0){
return false;
}
else if(n % 3 == 0){
return true;
}
else{
return false;
}
```
**So correct solution for this is: **
```
while(n >= 3){
if(n % 3 != 0){
return false;
}
n = n/3;
}
return n==1;
}
```
​
​