/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num > 9){
        let sum = 0;
        while(num > 0){
            let i = num%10;
            sum = sum + i;
            num = Math.floor(num/10);
        }
        num = sum;
    }
    return num;
};