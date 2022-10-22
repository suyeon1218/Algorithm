// * Medium
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

 var lengthOfLongestSubstring = function(s) {
    let stringMap = new Map();
    let left = 0;
    let maxLength = 0;
    
    for (let right=0; right<s.length; right++) {
        if(stringMap.has(s[right])) {
            maxLength = Math.max(maxLength, right-left);
            left = Math.max(stringMap.get(s[right]) + 1, left);
        }
        
        stringMap.set(s[right], right);
    }
    maxLength = Math.max(maxLength, s.length-left);
    
    return maxLength;
};