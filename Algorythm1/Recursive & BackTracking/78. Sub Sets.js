// * Medium: https://leetcode.com/problems/subsets/
// * Backtracking

 var subsets = function(nums) {
    const res = [];
    
    const go = (arr, index) => {
        res.push(arr);
        
        if (arr.length === nums.length) {
            return;
        }
        
        if (index >= nums.length) {
            return;
        }
        
        for (let i=index; i<nums.length; i++) {
            const sub = [...arr];
            sub.push(nums[i]);
            
            go(sub, index+1);
        }
    }
    
    go([], 0)
    
    return res;
};