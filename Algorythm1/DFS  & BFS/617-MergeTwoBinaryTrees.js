// * Easy
// https://leetcode.com/problems/merge-two-binary-trees/submissions/

// * Solution 1 - DFS
const mergeTrees = (t1, t2) => {
    if (!t1) {
        return t2;
    }
    if (!t2) {
        return t1;
    }
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};

// * Solution 2 - BFS ?
const mergeTrees2 = (t1, t2) => {
    if (t1 === null) {
        return t2;
    }
    const stack = [];
    stack.push([t1, t2]);

    while (stack.length !== 0) {
        const t = stack.pop();

        if (t[0] === null || t[1] === null) {
            continue;
        }

        t[0].val += t[1].val;

        if (t[0].left === null) {
            t[0].left = t[1].left;
        } else {
            stack.push([t[0].left, t[1].left]);
        }

        if (t[0].right === null) {
            t[0].right = t[1].right;
        } else {
            stack.push([t[0].right, t[1].right]);
        }
    }

    return t1;
};
