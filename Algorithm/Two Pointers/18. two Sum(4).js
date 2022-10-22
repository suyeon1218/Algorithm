// * https://leetcode.com/problems/4sum/
// * 4 sum => two sum 문제의 연장선

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    const res = [];
    nums = nums.sort((a,b) =>{return a-b});
    
    for (let i=0; i<nums.length-3; i++) {
        for (let j=i+1; j<nums.length-2; j++) {
            let low = j+1;
            let high = nums.length - 1;
            
            while (low < high) {
                const sum = nums[i] + nums[j] + nums[low] + nums[high];
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[low], nums[high]]);
                    
                    while (nums[low] === nums[low + 1]) low++;
                    while (nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                }
                else if (sum < target) {
                    low++;
                } 
                else {
                    high--;
                }
            }
            while (nums[j] === nums[j + 1]) j++;
        }
        while (nums[i] === nums[i + 1]) i++;
    }
    return res;
};