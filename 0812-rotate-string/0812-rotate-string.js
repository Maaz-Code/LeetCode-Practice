/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length == goal.length){
        let str = s + s;
        let j = 0;
        let k = goal.length;
        for(let i = 0; i < goal.length; i++){
            let sub = str.substring(j,k);
            if(sub === goal){
                return true;
            }
            j++;
            k++;
        }
    } else {
        return false;
    }
    return false;
};