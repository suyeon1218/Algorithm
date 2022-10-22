// * Medium
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// 무조건 하나의 답이 존재하므로 low++ 하거나 high-- 시키면서 인덱스 찾으면 됨 
var twoSum = function(nums, target) {
    const numsLen = nums.length;
    let low = 0;
    let high = numsLen - 1;
    
    while (low < high) {
        if (nums[low] + nums[high] === target) return [low+1, high+1];
        else if (nums[low] + nums[high] < target) low++;
        else high--;
    }
};