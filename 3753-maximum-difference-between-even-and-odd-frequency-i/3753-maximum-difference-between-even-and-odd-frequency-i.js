/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let odd = -Infinity;
    let even = Infinity;
    const map = new Map();

    for(let ch of s){
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for(let freq of map.values()){
        if(freq % 2 === 1){
            odd = Math.max(odd, freq);
        } else {
            even = Math.min(even, freq);
        }
    }

    return odd - even;
};