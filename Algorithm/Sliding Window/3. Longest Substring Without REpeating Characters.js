// * Medium
// SlidingWindow / String
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

 var lengthOfLongestSubstring = function(s) {
    let stringMap = {};
    let left = 0;
    let maxLength = 0;
    
    for (let right=0; right<s.length; right++) {
        const char = s[right];

        if(stringMap[char] !== undefined) {
            maxLength = Math.max(maxLength, right - left);
            left = Math.max(stringMap[char] + 1, left);
        }
        
        stringMap[char] = right;
    }
    maxLength = Math.max(maxLength, s.length - left);
    
    return maxLength;
};