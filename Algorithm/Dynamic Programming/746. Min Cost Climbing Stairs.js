// * 2022. 10. 05
// Dynamic Programming : LeetCode 75 - Study Plan
// https://leetcode.com/problems/min-cost-climbing-stairs/


// * discuss 1
// https://leetcode.com/problems/min-cost-climbing-stairs/discuss/282648/EASY-TO-READ-Javascript-O(n)-time-O(1)-space-Iterative
var minCostClimbingStairs = function(cost) {
  if (cost.length === 1) return 0;
  if (cost.length === 2) return Math.min(cost[0], cost[1]);
  
  let minCostTwoBefore = cost[0];
  let minCostOneBefore = cost[1];
  
  for (let n = 2; n < cost.length; n++) {
      const minCostAtCurrent = cost[n] + Math.min(minCostOneBefore, minCostTwoBefore);
      // 1, 2 스텝 전의 값들을 현재 값에 더해주고 앞으로 전진함으로써 최소한의 스텝을 찾는 방법 
      
      minCostTwoBefore = minCostOneBefore;
      minCostOneBefore = minCostAtCurrent;
  }
      
  return Math.min(minCostOneBefore, minCostTwoBefore);
};

// * discuss 2
var minCostClimbingStairs = function(cost) {
  for (let i = cost.length - 3; ~i; i--)
      cost[i] += Math.min(cost[i+1], cost[i+2])
  return Math.min(cost[0], cost[1])
};