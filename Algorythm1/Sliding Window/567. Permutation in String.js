
// 
 var checkInclusion = function(s2, s1) {
    const map = {};
    
    for (let i=0; i<s2.length; i++) {
        map[s2[i]] = map[s2[i]] === undefined ? 1 : map[s2[i]] + 1;
    }
    
    let count = s2.length;
    let left = 0;
    let right = 0;
    
    while (right < s1.length) {
        if (map[s1[right]] > 0) count--;
        if (count === 0) return true;
        
        map[s1[right]]--;
        right++;
        
        if (right - left === s2.length) {
            if (map[s1[left]] >= 0) count++;
            map[s1[left]]++;
            left++;
        }
        
    }
    
    return false;
};

var checkInclusion = function (s1, s2) {
    const len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false;

    const count = Array(26).fill(0);
    for (let i = 0; i < len1; i++) {
        count[s1.charCodeAt(i)-97]++;
        count[s2.charCodeAt(i)-97]--;
    }
    if (count.every(e => e === 0)) return true;

    for (let i = len1; i < len2; i++) {
        count[s2.charCodeAt(i)-97]--;
        count[s2.charCodeAt(i-len1)-97]++;
        if (count.every(e => e === 0)) return true;
    }
    return false;
};