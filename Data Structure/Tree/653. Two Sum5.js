// * two sum - 5
// * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
// stack 을 사용한 DFS, 전위 순회

var findTarget = function(root, k) {
    if (!root) return false;
    const set = new Set();
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (set.has(k - node.val)) return true;
            set.add(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
  return false;
};