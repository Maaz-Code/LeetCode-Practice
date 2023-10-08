/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let max = 0;
    for(var i = 0; i < prices.length; i++){
        if(min > prices[i]){
            min = prices[i];
        }
        else{
            const profit = prices[i] - min;
            if(max < profit){
                max = profit;
            }
        }
    }
    return max;
};
//Sliding Window Problem