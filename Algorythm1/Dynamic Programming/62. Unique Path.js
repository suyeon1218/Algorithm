// * 2022.10.05
// Dynamic Programming : https://leetcode.com/problems/unique-paths/


// * my solution -> Combination of m, n 조합 계산 공식 사용
 var uniquePaths = function(m, n) {
    let res = 1;
    
    const go = (mul, numerator, denominator) => {
        if(denominator === 0) {
            return mul;
        }
        
        mul = mul * (numerator / denominator);
        go(mul, numerator - 1, denominator - 1);
    }
    
    go(res, (m-1) + (n-1), Math.min(m-1, n-1));
    
    return res;
};

// * DP
 var uniquePaths = function(m, n) {
    const dp = [...new Array(m)].map(_ => new Array(n).fill(0));
  
    for (let i=0; i<n; i++) {
      dp[0][i] = 1;
    }
  
    for (let i=1; i<m; i++) {
      dp[i][0] = 1;
    }
  
    for (let row=1; row<m; row++) {
      for (let col=1; col<n; col++) {
        dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
      }
    }
      
      return dp[m-1][n-1];
  }