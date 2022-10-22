// * Queue + level order 사용하여 최소 depth 값 찾기
 var minDepth = function(root) {
    if (!root) return 0;
    
    let min = 0;
    const queue = [root];
    
    while(queue.length) {
        const qLen = queue.length;
        min++;
        
        for (let i=0; i<qLen; i++) {
            const current = queue.shift();
            
            if(!current.left && !current.right) {
                return min;
            }
            
            if (current.left) {
                queue.push(current.left);
            }
            
            if (current.right) {
                queue.push(current.right);
            }
        }
    }
    
    return min;
};