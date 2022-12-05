/*
    https://leetcode.com/problems/longest-common-prefix/
    문자열의 처음부터 비교하여 가장 긴 문자열을 return 하는 문제
*/

// * Discuss
// Using 'every()' Method
var longestCommonPrefix = function (strs) {
  let prefix = "";
  // response answer
  let maxPrefixLength = Math.min(...strs.map((str) => str.length));
  // 모든 문자열 중 길이가 짧은 문자열을 기준으로 검사
  for (let i = 0; i < maxPrefixLength; i++) {
    let char = strs[0][i];
    // 모든 문자열들에 대해서 문자 하나씩 검사하며 prefix에 문자 더하기
    if (strs.every((str) => str[i] === char)) {
      prefix += char;
    } else {
      break;
    }
  }
  return prefix;
};

// * Mine
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonPrefix = strs[0].split("");

  for (let str of strs) {
    str = str.split("");
    const compareLength = Math.min(commonPrefix.length, str.length);
    const nextPrefix = [];

    for (let idx = 0; idx < compareLength; idx++) {
      if (commonPrefix[idx] === str[idx]) {
        nextPrefix.push(str[idx]);
      } else {
        break;
      }
    }
    commonPrefix = nextPrefix;
  }
  commonPrefix = commonPrefix.join("");

  return commonPrefix;
};
