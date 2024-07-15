const climbStairs = n => {
    if (n <= 1) return 1; // Base case for n = 0 or n = 1

    const dp = new Array(n + 1).fill(0); // Array acts like the stair case we add an extra 1 in the begining to represent starting point

    dp[0] = 1; // Starting point will always be 1
    dp[1] = 1; // There was 1 way to reach the first step


    for (let i = 2; i <= n; i++) { // Start from i = 2 because dp[0] and dp[1] are already known
        dp[i] = dp[i - 1] + dp[i - 2]; // The number of ways to reach step i is the sum of ways to reach steps i-1 and i-2
            // i represents the current step we are calculating ways to reach
            // this math determine how many ways we were able to reach the current step we are about to take 
    }

    return dp[n]; 

};

// space: o(n)
// time: o(n)


