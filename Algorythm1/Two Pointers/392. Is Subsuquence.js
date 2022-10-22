// * https://leetcode.com/problems/is-subsequence/
// * https://leetcode.com/problems/is-subsequence/discuss/410577/Javascript-2-pointer-solution

// * s와 t 각각에서 포인터로 앞에서부터 비교해 나가며 s의 포인터가 s배열의 끝까지 다다르는지 확인하는 문제 

var isSubsequence = function(s, t) {
  let i = 0, j = 0;
  while(j < t.length) {
      if(s[i] === t[j]) {
          i++;
      }
      j++;        
  }
  return i === s.length;
};