// * Easy: https://leetcode.com/problems/running-sum-of-1d-array/

 var runningSum = function(nums) {
  const res = [];
  
  for (let i=0; i<nums.length; i++) {
      let sum = 0;
      for (let j=0; j<i+1; j++) {
          sum += nums[j];
      }
      res.push(sum);
  }
  
  return res;
};