/* 
  번호의 조합 'digits'를 입력했을 때, 해당 번호의 조합으로 만들 수 있는 모든 문자열 조합을 출력하는 문제
  https://leetcode.com/problems/letter-combinations-of-a-phone-number/
*/
const digitsMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var letterCombinations = function (digits) {
  const combinations = [];

  if (digits.length === 0) {
    return combinations;
  }

  const dfs = (position, str) => {
    if (position === digits.length) {
      combinations.push(str);
      return;
    }

    digitsMap[digits[position]].forEach(letter => {
      dfs(position + 1, str + letter)
    })
  };

  dfs(0, "");

  return combinations;
};
