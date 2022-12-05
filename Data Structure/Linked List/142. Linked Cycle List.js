// * Medium
// https://leetcode.com/problems/linked-list-cycle-ii/?envType=study-plan&id=level-1
// 서클이 시작되는 첫 노드를 return 하는 문제

// * Disucss
// * O(1) Space
// https://leetcode.com/problems/linked-list-cycle-ii/discuss/495311/JavaScript-Two-Pointers-w-Extended-Notes
var detectCycle = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next && fast.next.next) {
		// cycle을 찾기 위한 알고리즘 
        slow = slow.next;
        fast = fast.next.next;
        // cycle이 시작되는 부분을 찾기 위한 알고리즘
		// ! cycle 진입 전까지의 거리 === fast와 slow가 만난 곳에서 cycle 시작 부분의 거리 
		// 해당 거리들이 같지 않으면 영원히 빙빙 돌 것임... 
        if (slow === fast) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};

// * Mine
var detectCycle = function (head) {
    if (!head) return null;

    const nodeMap = new Map();
    // object 의 key는 string, symbol, interget 만 허용하기 때문에 new Map() 을 사용
    let currNode = head;

    while (currNode.next) {
        nodeMap.set(currNode, true);
        if (nodeMap.has(currNode.next)) break;
        currNode = currNode.next;
    }

    return currNode.next; // ? break 에다 return 쓰면 왜 안 먹지??
};
