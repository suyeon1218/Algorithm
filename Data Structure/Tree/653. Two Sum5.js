// * Easy
// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
// BST 트리와 target이 주어질 때, 트리의 요소 두개의 합이 target이 되면 true를, 요소가 없으면 false가 되는 문제 

// * Discuss
// Set 을 사용하여 각 요소를 순회하며 target - node.val이 Set에 존재하며 true를 return 
var findTarget = function(root, ) {
    if (!root) return false;

    const set = new Set();
    const stack = [root];

    while (stack.length) {
        const node = stack.pop();

        if (set.has(target - node.val)) return true;
            
        set.add(node.val);

        if (node.right) stack.push(node.right);

        if (node.left) stack.push(node.left);
    }

  return false;
};