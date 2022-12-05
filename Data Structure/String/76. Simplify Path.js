/*
  절대경로를 canonicalPath 로 만드는 문제
  https://leetcode.com/problems/simplify-path/
*/

// * Discuss
var simplifyPath = function(paths) {
  const stack = [];
  paths = paths.split("/");
  
  for (let path of paths) {
      if (path === '' || path === '.') {
          continue;
      }
      
      if (path === '..') {
          stack.pop();
          continue;
      }
      
      stack.push(path);
  }
  
  return '/' + stack.join('/');
};

// * Mine
var simplifyPath = function (paths) {
  const stack = [];
  let canonicalPath = "/";

  makeStack(stack, paths);
  canonicalPath = makeCanonicalPath(stack, canonicalPath);

  return canonicalPath;
};

const makeStack = (stack, paths) => {
  paths = paths.replace("//", "/").split("/");

  for (let path of paths) {
    if (path === "" || path === ".") {
      continue;
    }

    if (path === "..") {
      stack.pop();
      continue;
    }

    stack.push(path);
  }
};

const makeCanonicalPath = (stack, canonicalPath) => {
  for (let i = 0; i < stack.length; i++) {
    canonicalPath += stack[i];

    if (i !== stack.length - 1) {
      canonicalPath += "/";
    }
  }

  return canonicalPath;
};
