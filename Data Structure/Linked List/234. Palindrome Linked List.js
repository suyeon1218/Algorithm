// * Easy
// https://leetcode.com/problems/palindrome-linked-list/
// 주어진 Linked List가 Palindrome인지 알아보는 알고리즘

var isPalindrome = function(head) {
    let slow = head, fast = head;
    let temp, prev;
    // slow는 list의 중간에서 멈추고, fast는 list의 끝에서 멈춤
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    // list의 중간을 끊어줌
    prev = slow;
    slow = slow.next;
    prev.next = null;
    // 중간 - 끝 부분을 역순으로 재배열 
    while (slow) {
        temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    
    fast = head;
    slow = prev;
    // 끝, 앞에서부터 다시 비교
    while (slow && fast) {
        if (slow.val !== fast.val) {
            return false;
        } else {
            slow = slow.next;
            fast = fast.next;
        }
    }
    
    return true;
};