/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    function backtrack(s, left, right){
        if(s.length === 2*n){
            result.push(s);
            return;
        }

        if(left < n){
            backtrack(s + '(', left + 1, right);
        }

        if(right < left){
            backtrack(s + ')', left, right + 1);
        }
    }

    backtrack('', 0, 0);
    return result;
};