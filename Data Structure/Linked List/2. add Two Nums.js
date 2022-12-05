// * Medium
// https://leetcode.com/problems/add-two-numbers/
// 서로 다른 linked List 의 element의 숫자를 합해서 새 linked List를 만드는 문제 

const addTwoNumbers = (l1, l2) => {
    const newList = new ListNode();
    let head = newList;
    let flag = false;

    while (l1 !== null || l2 != null || flag) {
        const addNum = 0;

        if (flag) {
            addNum += 1;
        }

        if (l1 !== null) {
            addNum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            addNum += l2.val;
            l2 = l2.next;
        }

        addNum >= 10 ? (flag = true) : (flag = false);

        head.next = new ListNode(addNum % 10);
        head = head.next;
    }

    return newList.next;
};
