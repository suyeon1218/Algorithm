// * Easy
// https://leetcode.com/problems/remove-linked-list-elements/
// val이 주어질떄, val과 일치하는 값들을 linked List의 요소에서 제거하는 알고리즘 

 var removeElements = function(head, val) {
    if (!head) return head;
    
    while (head && head.val === val) {
        head = head.next;
    }
    
    let curr = head;
    let prev = head;
    
    while(curr) {
        if (curr.val === val) {
            prev.next = curr.next;
            curr = curr.next
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    
    return head;
};