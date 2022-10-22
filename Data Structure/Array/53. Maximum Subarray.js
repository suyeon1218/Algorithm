// * Medium : https://leetcode.com/problems/maximum-subarray/submissions/
// 합했을 떄 그 값이 가장 큰 subArray를 구하는 문제

 var maxSubArray = function(nums) {
    let prev = 0;
    let maxNum = Number.NEGATIVE_INFINITY;
    
    for (let i=0; i<nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        maxNum = Math.max(prev, maxNum);
    }
    
    return maxNum;
};