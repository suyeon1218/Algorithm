// * Medium : https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/?envType=study-plan&id=algorithm-ii
// target과 일치하는 인덱스의 시작과 끝을 반환하는 문제

 var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            left = mid;
            right = mid;
            while (nums[left - 1] === target) {
                left--;
            } 
            while (nums[right + 1] === target) {
                right++;
            }
            return [left, right];
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        
    }
    
    return [-1, -1];
};