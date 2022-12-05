/*
  https://leetcode.com/problems/valid-parentheses/
  유효한 괄호인지 확인하는 문제
*/

var isValid = function (s) {
  const stack = [];
  const open = ["[", "{", "("];
  s = s.split("");

  while (s.length > 0) {
    const currParentheses = s.pop();

    if (open.includes(currParentheses)) {
      const close = stack.pop();

      if (currParentheses === "[") {
        if (close !== "]") return false;
      }

      if (currParentheses === "{") {
        if (close !== "}") return false;
      }

      if (currParentheses === "(") {
        if (close !== ")") return false;
      }
    } else {
      stack.push(currParentheses);
    }
  }

  return stack.length === 0 ? true : false;
};
