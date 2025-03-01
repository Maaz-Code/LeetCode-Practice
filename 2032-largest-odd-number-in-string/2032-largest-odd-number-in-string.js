/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    if(num[num.length-1]%2 === 1){
        return num;
    }
    for(let i = num.length; i>=0 ; i--){
        if(num[i] % 2 === 1){
            return num.substring(0, i+1);
        }
    }
    return "";
};