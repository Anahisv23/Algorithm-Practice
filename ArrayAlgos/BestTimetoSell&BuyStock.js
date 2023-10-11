const maxProfit = (prices) => {
    if (prices.length <= 1) {
        return 0; 
    }

    let minPrice = prices[0]; 
    let maxProfit = 0; 

    for (let i = 1; i < prices.length; i++) {
        // if a smaller minimum is found update min price so we buy stock for cheaper
        if (prices[i] < minPrice) { 
            minPrice = prices[i]; 
        } else { 
        // if currNum is greater than minimum then come here and caluculate curr profit 
        // if our currentProfit is greater than our maxProfit update it since we want to get as much profit as we can 
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