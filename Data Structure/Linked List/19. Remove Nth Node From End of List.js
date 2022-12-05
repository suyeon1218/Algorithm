// * Medium
//  https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/
// 끝에서 N번째 노드를 삭제하는 문제

var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head

    for (let i = 0; i < n; i++) {
        fast = fast.next
    }

    if (!fast) {
        return head.next
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next
    
    return head
};