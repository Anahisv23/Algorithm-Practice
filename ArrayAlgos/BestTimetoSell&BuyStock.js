const maxProfit = (prices) => {
    if (prices.length <= 1) {
        return 0; 
    }

    let minPrice = prices[0]; 
    let maxProfit = 0; 

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; 
        } else {
            let currentProfit = prices[i] - minPrice;
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit; 
            }
        }
    }

    return maxProfit;
};

// time complexity: o(n)
// space complexity: 0(1)