/* 
  마지막 단어의 길이를 반환하는 문제
  https://leetcode.com/problems/length-of-last-word/
*/

// * mine
var lengthOfLastWord = function(s) {
  s = s.split(" ");
  
  for (let idx = s.length - 1; idx >= 0; idx--) {
      if (s[idx] !== "") return s[idx].length;
  }
};

// * Discuss
// trim() 메소드로 공백 제거
var lengthOfLastWord = function(s) {
  return s.trim().split(" ").pop().length;
};