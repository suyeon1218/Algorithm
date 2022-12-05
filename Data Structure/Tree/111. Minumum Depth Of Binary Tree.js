// * Easy
// https://leetcode.com/problems/minimum-depth-of-binary-tree/

// Queue + level order -> 한 요소라도 right, left 자식이 없으면 거기서 depth return 하면 됨 
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