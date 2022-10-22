// * Easy
// https://leetcode.com/problems/middle-of-the-linked-list/

// head 가 한번 갈 때, fast가 두번 가면, fast가 끝에 도착할때 head는 중간지점에 도착한다. 
var middleNode = function(head) {
    let fast = head.next;
    while (fast) {
        head = head.next;
        fast = fast.next?.next;
    }
    return head;
};