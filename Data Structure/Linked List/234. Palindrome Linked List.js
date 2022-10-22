// * Easy : https://leetcode.com/problems/palindrome-linked-list/
// 주어진 Linked List가 Palindrome인지 알아보는 문제 

var isPalindrome = function(head) {
    let slow = head, fast = head;
    let temp, prev;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    prev = slow;
    slow = slow.next;
    prev.next = null;
    
    while (slow) {
        temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    
    fast = head;
    slow = prev;
    
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