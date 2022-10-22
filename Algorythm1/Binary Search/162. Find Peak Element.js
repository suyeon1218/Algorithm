// ! 투표 수 낮음
// * Medium : https://leetcode.com/problems/find-peak-element/?envType=study-plan&id=algorithm-ii

// mid + 1이 더 크면 left 이동
// mid 가 더 크면 right 이동
// 범위를 좁혀가면 자연스레 작은 수 사이에 위치하게 됨 
 var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};