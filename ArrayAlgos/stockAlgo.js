const maxProfit = prices => {
    let maxProfit = 0 
    let minCost = prices[0] 
 
    for (let i = 1; i < prices.length; i++){
     if(prices[i] < minCost){
         minCost = prices[i]
     } else {
         let currProfit = prices[i] - minCost 
         if(currProfit > maxProfit){
             maxProfit = currProfit
         }
     }
    }
    return maxProfit
 };
 
 // time: o(n)
 // space: o(1)
 
 /**
 APPROACH 
 
 make two function scoped vars one that will keep track of max profit as we traverse the array
 and the other one to keep track of the minimum cost of buying stock intialize this to be first number in arr
 
 traverse the array 
     begin for loop pointer at 1 so we can see 
     if currNum < min cost if it update minimum cost 
     if currNum > mincost this means that we should calculate how much profit we can make 
       make var called currProfit = currNum - minCost 
       if(currProfit > maxProfit)
         update max profit = currProfit
 
 return max profit 
  */