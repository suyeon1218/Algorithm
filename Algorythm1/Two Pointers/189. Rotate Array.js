// https://leetcode.com/problems/rotate-array/
// * medium


// * discuss
// https://leetcode.com/problems/rotate-array/discuss/558971/Faster-than-99.56-JavaScript
var rotate = function (nums, k) {
    // k > nums.length를 위해서 k % nums.length
    k %= nums.length;
    
    if (k === 0) return;

    let reverse = function (i, j) {
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
            j--;
        }
    }; // suppose  ----->--->
    reverse(0, nums.length - 1); // reverse   <--<------
    reverse(0, k - 1); // reverse first part ---><----
    reverse(k, nums.length - 1); // reverse second part --->----->
};

// ah.......