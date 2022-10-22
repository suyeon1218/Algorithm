/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
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