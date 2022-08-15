#### Wrong Output :
```
if(s == null || s.length() == 0) {
return 0;
}
int ss[] = new int[s.length()];
int I = 1;
int V = 5;
int X = 10;
int L = 50;
int C = 500;
int M = 1000;
int sum = 0;
for(int a = 0; a < ss.length-1; a++){
if(ss[a] < ss[a+1]){
sum = sum - ss[a];
}
else {
sum = sum + ss[a];
}
}
return sum;
```