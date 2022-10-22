// * Medium: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/?envType=study-plan&id=algorithm-ii
// rotate된 sorted Array에서 가장 작은 값을 찾는 문제

// * My Solution: O(log n)
 var findMin = function(nums) {
    if (nums.length === 1) return nums[0];
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        if (left === right - 1) {
            return Math.min(nums[left], nums[right]);
        }
        
        const mid = Math.floor((left + right) / 2);
        
        if (nums[left] < nums[right]) {
            return nums[left];
        } else {
            if (nums[mid] < nums[right]) {
                right = mid;
            } else {
                left = mid; 
            }
        }
    }
};

// * discuss : O(log n)
var findMin = function(nums) {
    var left = 0,
        right = nums.length - 1
    
    while (left < right){
        var mid = Math.floor((left + right)/2)
        if (nums[mid] > nums[right]) left = mid + 1
        else right = mid
    }
    return nums[left]
};