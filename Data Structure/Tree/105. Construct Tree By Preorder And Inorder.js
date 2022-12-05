// * Medium
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// preorder 과 inorder 로 순회할 때의 배열이 주어지고, 이 순회를 참조해서 트리를 만드는 문제 

// * Discuss
var buildTree = function(preorder, inorder) {
    let hash = {};
    inorder.forEach((e, i)=>{hash[e] = i});
    // hash[element] : index 형태
    let recur = function(start, end) {
        if (start > end) return null;
        let root = new TreeNode(preorder.shift());
        root.left = recur(start, hash[root.val] - 1);
        root.right = recur(hash[root.val] + 1, end);
        return root;
    }
    
    return recur(0, inorder.length - 1);    
};

// * Mine
// preorder과 inorder의 순서를 참고하면 풀 수 있는 문제
 var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }
    
    const root = new TreeNode(preorder.shift());
    let leftInorder;
    let rightInorder;
    
    for (let i=0; i<inorder.length; i++) {
        if (root.val === inorder[i]) {
            leftInorder = inorder.slice(0, i);
            rightInorder = inorder.slice(i+1);
            break;
        }
    }
    
    root.left = buildTree(preorder.slice(0, leftInorder.length + 1), leftInorder);
    root.right = buildTree(preorder.slice(leftInorder.length), rightInorder);
    
    return root;
};



