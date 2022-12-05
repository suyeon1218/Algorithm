// * Easy
// Stack : https://leetcode.com/problems/backspace-string-compare/

// * Discuss
const process = s => {
    const res = [];
    for (x of s.split('')) {
        x === '#' ? res.pop() : res.push(x);
    }
    return res.join('')
}

var backspaceCompare = function(s,t) {
    return process(s) == process(t);
}

// * my solution
 var backspaceCompare = function(s, t) {
  const sStack = [];
  const tStack = [];
  
  for (let i=0; i<s.length; i++) {
      const char = s[i];
      
      if (char === '#') {
          sStack.pop();
      } else {
          sStack.push(char);
      }
  }
  
  for (let i=0; i<t.length; i++) {
      const char = t[i]
      
      if (char === '#') {
          tStack.pop();
      } else {
          tStack.push(char);
      }
  }
  
  return JSON.stringify(sStack) === JSON.stringify(tStack);
};

