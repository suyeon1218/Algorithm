// * Easy : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

 var maxProfit = function(prices) {
    let maxSell = prices[prices.length-1];
    let profit = 0;
    
    for (let i=prices.length-2; i>=0; i--) { 
        if (maxSell - prices[i] < 0) {
            maxSell = prices[i];
        }
        
        else {
            profit = Math.max(profit, maxSell-prices[i]);
        }
    }
    
    return profit;
};

var maxProfit = function(prices) {
    var min = Number.MAX_SAFE_INTEGER; 
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};