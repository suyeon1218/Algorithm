/* 
  string: haystack, needle이 주어질 때 needle문자열을 포함하고 있는 haystack의 첫번째 인덱스를 반환하는 문제
  https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
*/

var strStr = function (haystack, needle) {
  needle = needle.split("");

  const isOccurrence = (position) => {
    for (let char of needle) {
      if (char !== haystack[position]) {
        return false;
      }
      position++;
    }

    return true;
  };

  for (let position = 0; position < haystack.length; position++) {
    if (haystack[position] === needle[0]) {
      if (isOccurrence(position)) {
        return position;
      }
    }
  }

  return -1;
};
