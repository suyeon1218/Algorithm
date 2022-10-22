// * 좌우 트리의 높이가 1이하 차이나는 balance Tree 인지 판별하는 문제
// * https://leetcode.com/problems/balanced-binary-tree/discuss/504898/JavaScript-Solution

 var isBalanced_1 = function(root) {
    const dfs = (node) => {
        if (node) {
            // * 왼쪽 트리의 높이 계산
            const left = 1 + dfs(node.left);
            // * 오른쪽 트리의 높이 계산
            const right = 1 + dfs(node.right);
            // * 오른쪽 트리와 왼쪽 트리의 높이 차가 1보다 작으면 밸런스 트리
            const isBalanced = Math.abs(left - right) <= 1;
            // * 밸런스 트리면 높이 반환, 아니면 infinity 반환
            return isBalanced ? Math.max(left, right) : Infinity;
        } else {
            // * undefined node를 return  => 0과 동일
            return node;
        }
    }
    
    return dfs(root) === Infinity ? false : true;
};

// * 다른 풀이법
// * https://leetcode.com/problems/balanced-binary-tree/discuss/341286/JS-Recursive-solution-with-comments
// ! 효율이 더 좋음 
// ? 왜 효율이 더 좋을까 

var isBalanced = function(root) {
	if(!root) {
        return true;
    };
    
    let flag = true;

    // * 트리를 순회하며 tree의 높이를 반환하는 함수
    function helper(root) {
        // * leaf 노드까지 온 경우  -> height 탐색이 필요하지 않으므로 0 return;
        if (!root.left && !root.right) {
            return 0
        }

        let leftHeight = 0, rightHeight = 0;

        if (root.left) {
            leftHeight = 1 + helper(root.left);
        }

        if (root.right) {
            rightHeight = 1 + helper(root.right);   
        }

        // * 밸런스 트리가 아니면 flag = false
        if (Math.abs(leftHeight - rightHeight) > 1) {
            flag = false;
        }

        // * 왼쪽 서브트리와 오른쪽 서브트리 중 더 큰 쪽의 heigth를 반환함
        let height = Math.max(leftHeight, rightHeight); 

        return height;
    }

    // * node를 순회하며 flag가 바뀌거나 바뀌지 않음
    helper(root);

    return flag
};