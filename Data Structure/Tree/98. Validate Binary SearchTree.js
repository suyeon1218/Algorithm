// * 2022.10.04
// leetcode 75 study plan - Day 8
// https://leetcode.com/problems/validate-binary-search-tree/
//  각 노드마다 min-max를 설정해줌으로써 min-max 사이의 값인지 검사 

// * discuss
// https://leetcode.com/problems/validate-binary-search-tree/discuss/529937/javascript-%3A-97-faster-simple-recursion
var isValidBST = function (root, min = null, max = null) {
  if (!root) return true;
  if (min?.val >= root.val) return false;
  if (max?.val <= root.val) return false;
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

// * discuss 2
// https://leetcode.com/problems/validate-binary-search-tree/discuss/974147/PythonJSGoC%2B%2B-O(n)-by-DFS-and-rule-w-Hint
// ! faster than discuss 1
var isValidBST = function (root) {
  return validate(root, -Infinity, Infinity);
};

var validate = function (node, min, max) {
  if (node === null) return true;

  if (min < node.val && node.val < max) {
    return (
      validate(node.left, min, node.val) &&
      validate(node.right, node.val, max)
    );
  } else {
    return false;
  }
};
