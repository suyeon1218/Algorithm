// * 2022.10.04
// * Dynamic Programming + memeorization
// leetcode 75 study plan - Day 10
// https://leetcode.com/problems/fibonacci-number/
//  recursive -> over the time limit 

// * discuss
//  https://leetcode.com/problems/climbing-stairs/discuss/914746/Easy-JS-Solution-Memoization-and-Recursion-in-3-Lines
 var climbStairs = function(n, memo = {1:1, 2:2}) {
    if (memo[n] !== undefined) { // stair is 1 or 2
        return memo[n];
    }
    memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    return memo[n];
};

//*  my solution
var climbStairs = function(n) {
    const memo = {1:1, 2:2};
    
    for (let i=3; i<=n; i++) {
        memo[i] = memo[i-1] + memo[i-2];
        // ex) stair is 5, except the one or two step
        // remaining stairs are 4(n-1) and 3(n-2)
    }
    
    return memo[n];
};