// * Medium
// https://leetcode.com/problems/sort-list/?envType=study-plan&id=level-2
// Linked List를 time : O(n log n) space : O(1) 의 복잡도로 오름차순 정렬하는 알고리즘
// * Discuss
const merge = (a, b) => {
    if (a === null) return b;
    if (b === null) return a;

    if (a.val < b.val) {
        a.next = merge(a.next, b);
        return a;
    } else {
        b.next = merge(a, b.next);
        return b;
    }
};

var sortList = function (head) {
    if (!head) return null;
    if (!head.next) return head;

    let prev = null;
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    // 중간에서 prev를 기준으로 list를 반으로 자름
    if (prev) {
        prev.next = null;
    }

    // 분할 정복 & 정렬
    // 분할은 각각 element 하나하나로 나뉘어짐
    // 4 - 2 / 1 - 3  => 4 / 2 / 1 / 3
    // 2 - 4 / 1 - 3 => 1 - 2 - 3 - 4
    let firstHalf = sortList(head);
    let secondHalf = sortList(slow);

    result = merge(firstHalf, secondHalf);

    return result;
};
