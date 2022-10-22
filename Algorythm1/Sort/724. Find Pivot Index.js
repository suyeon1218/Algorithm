// * https://leetcode.com/problems/find-pivot-index/
// * 

 var pivotIndex = function(nums) {
  for (let i=0; i<nums.length; i++) {
      const pivot = i;
      let leftSum = 0;
      let rightSum = 0;
      
      for (let left=i-1; left>=0; left--) {
          leftSum += nums[left];
      }
      
      for (let right=i+1; right<nums.length; right++) {
          rightSum += nums[right];
      }
      
      if (leftSum === rightSum) return pivot;
  }
  
  return -1;
};

// ! discuss
// * https://leetcode.com/problems/find-pivot-index/discuss/138027/javascript-solution%3A-beats-100.00-runtime-76ms
var pivotIndex = function(nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let sumL = 0;
  let len = nums.length;
  for(let i=0; i<len; i++){
    if(sumL === (sum-nums[i])/2) return i;
    sumL += nums[i]; // reduce처럼 가산
  }
  return -1;
};

// 1,7,3,6,5,6
// sum = 28
// (sum - nums[i]) / 2 => nums[i]를 제외했을때 나뉘는 왼쪽 수의 합과 오른쪽 수의 합
// 1, 8, 11, 17, 22, 28
// sumL 순서 -> reduce로 합해지지는 순서

// * sumR 과 sumL 을 따로 만들어 비교
// * https://leetcode.com/problems/find-pivot-index/discuss/138027/javascript-solution%3A-beats-100.00-runtime-76ms
var pivotIndex = function(nums) {
  let sum = nums.reduce((a,b)=>a+b, 0);
  let sumL = 0, sumR = sum;
  for(let i=0, len=nums.length; i<len; i++){
      sumR -= nums[i];
    if(sumL === sumR) return i;
    sumL += nums[i];
  }
  return -1;
};