// * Data Structure Easy
// https://leetcode.com/problems/remove-linked-list-elements/
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