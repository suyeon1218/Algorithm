// *https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// * map 을 사용하지 않음
// * 무조건 하나의 답이 존재

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
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