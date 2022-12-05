// * Easy : https://leetcode.com/problems/maximum-depth-of-binary-tree/
// 최대 depth값을 찾는 문제 

// * 풀이
//  레벨 순회 -> 자식이 없으면 queue가 비워짐 -> 탐색마다 Depth 변수를 +1 씩 더해가며 queue가 비워질 때 Depth return
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