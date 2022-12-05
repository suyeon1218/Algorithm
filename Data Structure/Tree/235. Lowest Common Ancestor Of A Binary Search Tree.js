// * Medium
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/?envType=study-plan&id=level-1
// BST 트리, 노드 p, 노드 q 가 주어질 때 p와 q의 가장 가까운 조상을 찾는 문제 

// * discuss
// BST 트리임으로 값의 크기로 p와 q를 찾음 
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