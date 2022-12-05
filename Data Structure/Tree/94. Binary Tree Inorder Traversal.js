// * Easy : https://leetcode.com/problems/binary-tree-inorder-traversal/
// 바이너리 이진 트리 전위 순회 

var inorderTraversal = function(root) {
    const stack = [];
    const res = [];

    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
}