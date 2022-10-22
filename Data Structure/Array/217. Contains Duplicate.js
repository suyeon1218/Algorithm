// * Easy : https://leetcode.com/problems/contains-duplicate/?envType=study-plan&id=data-structure-i
// 중복 숫자가 들어있는지 판별하는 문제

var containsDuplicate = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        
        if(obj[nums[i]] > 1) return true;
    }
    
    return false;
};