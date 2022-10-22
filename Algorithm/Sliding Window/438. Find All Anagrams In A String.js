// * 2022. 10. 05
// Sliding Window & Two Point : https://leetcode.com/problems/find-all-anagrams-in-a-string/?envType=study-plan&id=level-1

// * discuss
// https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/1025753/Simplest-Sliding-Window-Solution-O(N)-Heavily-Commented-JavaScript
const findAnagrams = (s, p) => {
  const res = [];
  const pCharMap = {};

  for (let char of p) { // 각 문자의 개수 count Map
    if (char in pCharMap) {
      pCharMap[char]++;
    } else pCharMap[char] = 1;
  }

  //  s = "cbbae"
  //  p = "ccb"
  let left = 0;
  let right = 0;
  let count = p.length;

  while (right < s.length) {
    // Map내에 존재하면 count--
    if (pCharMap[s[right]] > 0) count--;

    pCharMap[s[right]]--;
    right++;

    // count: 0 -> substring과 map이 완전히 일치 
    if (count === 0) res.push(left);
    // * left로 올라오면서 위에서 했던 작업과 반대로 실시
    if (right - left === p.length) {
      if (pCharMap[s[left]] >= 0) count++;
      pCharMap[s[left]]++;
      left++;
    }
  }
  return res;
};
