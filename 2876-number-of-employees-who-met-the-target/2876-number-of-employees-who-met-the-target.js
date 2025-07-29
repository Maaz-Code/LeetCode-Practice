/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;
    for(let i in hours){
        if(hours[i] >= target){
            count++;
        }
    }
    return count;
};