/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();
    while(n !== 1){
        if(set.has(n)){
            return false;
        }
        set.add(n);

        let sum = 0;
        while(n > 0){
            let i = n % 10;
            sum = sum + i*i;
            n = Math.floor(n/10);
        }
        n = sum;
    }
    return true;
};