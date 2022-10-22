// * queue로 level order 하며 최대 depth값 찾기.

 var maxDepth = function(root) { 
    if (!root) {
        return 0;
    }
    
    const queue = [root];
    let maxDepth = 0;
    
    while (queue.length) {
        const qLen = queue.length;
        maxDepth++;
        
        for (let i=0; i<qLen; i++) {
            const current = queue.shift();
            
            if (current.left) {
                queue.push(current.left);
            }
            
            if (current.right) {
                queue.push(current.right);
            }
        }
    }
    
    return maxDepth;
};