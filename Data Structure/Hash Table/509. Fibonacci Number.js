// * 2022.10.04
// * Dynamic Programming
// leetcode 75 study plan - Day 10
// https://leetcode.com/problems/fibonacci-number/
/**
 * @param {number} n
 * @return {number}
 */

// O(1) / O(N)
 var fib = function(n) {
  const map = {0:0, 1:1};
  
  for (let i=2; i<=n; i++) {
      map[i] = map[i-1] + map[i-2];
  }
  return map[n];
};

// * discuss O(1) / O(1)
// https://leetcode.com/problems/fibonacci-number/discuss/1159381/JS-Python-Java-C%2B%2B-or-Simple-O(1)-O(1)-Solution-w-Explanation
// 피보나치 수열 공식 이요해서 풀었음 
var fib = function(n) {
  let sqrt5 = Math.sqrt(5)
  return (Math.pow(1 + sqrt5, n) - Math.pow(1 - sqrt5, n)) / Math.pow(2, n) / sqrt5
};