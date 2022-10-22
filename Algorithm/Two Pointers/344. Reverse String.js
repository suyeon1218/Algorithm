// * Easy
// https://leetcode.com/problems/reverse-string/

var reverseString = function(s) {
    // ㅅㅂ 투포인터 그만해~~~~~~~~~~
    let low = 0;
    let high = s.length - 1;
    
    while (low < high) {
        [s[low], s[high]] = [s[high], s[low]];
        low++;
        high--;
    }
};