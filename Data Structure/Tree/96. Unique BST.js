// * 가능한 BST tree 의 개수
// * memorization (DP?)
// * https://leetcode.com/problems/unique-binary-search-trees/discuss/1150728/Javascript-Recursive-Memo-Explanation
// * discuss2 ?
// * https://leetcode.com/problems/unique-binary-search-trees/discuss/488024/JavaScript-Solution-DP-w-Explanation

var numTree = function(n) {
    const cache = [];
    return numTreeMemo(n, cache);
}

var numTreeMemo = function(n, cache) {
    // * Base Case
    if (n == 1) {
        return 1;
    }

    // * use cache
    if (cache[n]) {
        return cache[n];
    }

    let totalTrees = 0;

    // * 각 노드들을 한번씩 root 노드로 픽업할 것
    for (let root=1; root<=n; root++) {
        let leftTrees = 1;
        // * root 노드의 leftTree 를 결정

        if (root > 1) {
            leftTrees = numTreeMemo(root - 1, cache);
        }

        let rightTrees = 1;

        if (root < n) {
            rightTrees = numTreeMemo(n - root, cache);
        }

        totalTrees += leftTrees * rightTrees;
    }

    cache[n] = totalTrees;

    return totalTrees;
}

// ! Discuss 2

const SecondNumTree = (n) => {
    let combination = new Array(n+1).fill(0);
    combination[0] = 1;
    combination[1] = 1;

    for (let node=2; node<=n; node++) {
        for (let i=1; i<=node; i++) {
            combination[node] += combination[i-1] * combination[node-i];
            // * combination[i-1] = 왼쪽 서브 트리 노드 수
            // * combination[node - i] = 오른쪽 서브 트리 노드 수
            // * ex => node = 3이면 왼쪽 오른쪽-> 2 0 / 1 1 / 0 2 등으로 나뉠 수 있음
        }
    }

    return combination[n];

}