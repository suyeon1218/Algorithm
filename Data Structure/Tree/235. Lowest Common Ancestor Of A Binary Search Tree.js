// * 2022.10.04
// leetcode 75 study plan - Day 8
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/?envType=study-plan&id=level-1

// * discuss
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/discuss/541362/JavaScript-Iterative-Recursive
// space Complexicy : O(1)
var lowestCommonAncestor = function(root, p, q) {
  while (root) {
      if (q.val < root.val && p.val < root.val) { // p,q 가 root 보다 작으면 root = root.left;
          root = root.left
      } else if (q.val > root.val && p.val > root.val) { // p,q가 root 보다 크면 root = root.right;
          root = root.right;
      } else { // p,q가 루트값보다 각각 크고 작으면 root가 lowest ancestor
          break;
      }
  }
  
  return root;
}


// space Complexicy : O(H)
// ? why this solution's space complexity is O(H)
// ! runtime need to store whole call stack and variables in each of context, thus memory usage piles up and will be freed only when function returns
var lowestCommonAncestor = function(root, p, q) {
  if (root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};