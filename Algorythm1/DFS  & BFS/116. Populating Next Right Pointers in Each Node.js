// * Medium
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/


// * Mine
var connect = function(root) {
    if (!root || !root.left) return root;
    let queue = [root.left, root.right];
    
    while (queue.length) {
        const next = [];

        while (queue.length) {
            const currNode = queue.shift();
            currNode.next = queue[0] || null;
            if (currNode.next) {
                next.push(currNode.left);
                next.push(currNode.right);
            }
        }
        queue = next;
    }
    
    return root;
};

// * dicuss - DFS
var connect = function(root) {
    if (root == null || root.left == null) return root;
    root.left.next = root.right;
    root.right.next = root.next ? root.next.left:null;
    connect(root.left);
    connect(root.right);
    return root;
}

// * discuss - BFS
var connect = function(root) {
    if (root == null) return root;
    let queue = [root];
    while(queue.length!=0) {
        let next = [];
        while(queue.length!=0) {
            let node = queue.shift();
            node.next = queue[0]||null;
            if (node.left!=null) {
                next.push(node.left);
                next.push(node.right);
            }
        }
        queue = next;
    }
    return root;
};