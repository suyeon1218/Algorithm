// * level 순회
// * https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/472672/Javascript-Detailed-line-by-line-solution

 var levelOrder = function(root) {
    if (!root) return [];
    
    const res = [];
    const queue = [root];
    
    while (queue.length) {
        const currQueueLen = queue.length;
        // * push로 값을 집어넣으면 queue.length값이 변하기 때문에 미리 값을 가져다 놔야함
        const currLevel = [];
        
        for (let i=0; i<currQueueLen; i++) {
            const currNode = queue.shift();
            
            if (currNode.left) {
                queue.push(currNode.left);
            }
            
            if (currNode.right) {
                queue.push(currNode.right);
            }
            
            currLevel.push(currNode.val);
        }
        
        res.push(currLevel);
    }
    
    return res;
};