// * Medium : https://leetcode.com/problems/house-robber/
// 각 배열이 재물 수를 뜻하고, 연속된 두 집은 털 수 없을 때 어떻게 집을 털어야 가장 많은 이득을 취할 수 있는지를 묻는 문제
var rob = function(nums) {   
    if (nums.length === 1) {
        return nums[0];
    }
    
    if (nums[2]) {
        nums[2] += nums[0];
    }
    
    for (let i=3; i<nums.length; i++) {
        nums[i] += Math.max(nums[i-2], nums[i-3]);
    }
    
    return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
};