// * easy
// https://leetcode.com/problems/move-zeroes/


// * my solution
 var moveZeroes = function(nums) {    
    for (let left = 0; left<nums.length - 1; left++) {        
        if (nums[left] === 0) {
            let right = left + 1;
            while (right < nums.length) {
                if (nums[right] !== 0) break;
                right++;
            }
            
            if (right >= nums.length) return;
            else [nums[left], nums[right]] = [nums[right], nums[left]];
        }
    }
    
    return;
};

// * discuss
var moveZeroes = function(nums) {
    var pos = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos++] = nums[i];
        }
    }
    // pos로 앞자리부터 숫자를 채운다음
    for (i = pos; i < nums.length; i++) {
        nums[i] = 0;
    }
    // pos 이후론 0을 채움 ㅁㅊ 
    };