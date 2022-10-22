// * Easy
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

// * my Solution : Space O(1)
var reverseWords = function(s) {
    s = s.split(" ");
    
    for (let i=0; i<s.length; i++) {
        let word = s[i].split("");
        
        let low = 0;
        let high = s[i].length - 1;
        
        while (low < high) {
            [word[low], word[high]] = [word[high], word[low]];
            low++;
            high--;
        }
        
        word = word.join("");
        s[i] = word;
    }
    
    return s.join(" ");
};

// * Solution2
var reverseWords = function(s) {
    s = s.split(" ");
    let res = [];
    
    for (let i=0; i<s.length; i++) {
        res.push(s[i].split("").reverse().join(""));
    }
    
    return res.join(" ");
};
