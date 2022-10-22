// https://leetcode.com/problems/binary-search/?envType=study-plan&id=algorithm-i

 var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
      if (nums[left] === target) return left;
      if (nums[right] === target) return right;
      left++;
      right--;
  }
  
  return -1;
};