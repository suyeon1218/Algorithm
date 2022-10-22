// * Medium : https://leetcode.com/problems/combinations/?envType=study-plan&id=algorithm-i

var combine = function(n, k) {
    let result = [];
    
    function dfs(current, start) {
        if(current.length == k) {
            result.push(current);
            return;
        }
        for(let i = start; i <= n; i++) {
            dfs([...current, i], i + 1);
        }
    }
    
    dfs([], 1);
    return result;
};