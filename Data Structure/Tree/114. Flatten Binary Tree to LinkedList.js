// * Medium
//  https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
// 트리를 하나의 linked list 처럼 자식을 옮겨주는 문제


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

// * Mine
// preorder 한 뒤, 순회하며 left를 없애고 right에 자식들을 붙이는 방식
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
    // preorder 순서대로 다시 linkedList로 만들어줌 
    for (let i=1; i<preorder.length; i++) {
        root.right = preorder[i];
        root.left = null;
        root = root.right;
    }
}



