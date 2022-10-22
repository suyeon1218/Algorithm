// * Medium
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// * my Solution
 var removeNthFromEnd = function(head, n) {
    let len = 0;
    let removeList = removeListHead = head;
    
    while(head !== null) {
        len++;
        head = head.next;
    }
    
    if(len === n) {
        return removeListHead.next;
    }
     
    for(let i=0; i<len; i++) {
        if(i === len - n - 1) {
            removeList.next = removeList.next.next;
            break;
        }
        
        removeList = removeList.next;
    }
    
    return removeListHead;
};

// * Solution 2

// * dicuss
var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head
    for (let i = 0; i < n; i++) fast = fast.next
    if (!fast) return head.next
    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head
};