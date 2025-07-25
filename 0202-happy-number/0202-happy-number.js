/**
 * @param {number} n
 * @return {boolean}
 */

function getNext(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}

var isHappy = function(n) {
    let slow = n;
    let fast = getNext(n);

    while(fast !== 1 && slow !== fast){
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }

    return fast === 1;
};