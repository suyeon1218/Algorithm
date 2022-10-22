// * Medium : https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
// 트리를 하나의 linked list 처럼 자식을 옮겨주는 문제

// * mine
 var flatten = function(root) {
    if(root === null) return;
    
    const preorder = [];
    let head = root;
    const stack = [root];
    // preorder
    while (stack.length) {
        if (head) {
            preorder.push(head);
            stack.push(head);
            head = head.left;
        } else {
            head = stack.pop();
            head = head.right;
        }
    }
    for (let i=1; i<preorder.length; i++) {
        root.right = preorder[i];
        root.left = null;
        root = root.right;
    }
}

// * discuss
// recursive
// 오른쪽 아래에서부터 head를 옮겨가며 head의 위 노드와 연결시켜준다.
var flatten = function(root) {
    let head = null
    const revPreOrder = node => {
        if (node.right) revPreOrder(node.right)
        if (node.left) revPreOrder(node.left)
        node.left = null, node.right = head, head = node
    }
    if (root) revPreOrder(root)
};

