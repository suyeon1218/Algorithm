// * Medium
// https://leetcode.com/problems/odd-even-linked-list/?envType=study-plan&id=level-2
// 홀수 노드를 앞쪽, 짝수노드를 뒤쪽으로 정렬하는 알고리즘

// * O(N/2) 
 var oddEvenList = function(head) {
    if (!head) return head;
    
    let odd = head;
    let even = head.next;
    let temp = even;
    
    while (even && even.next) {
        odd.next = even.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    
    odd.next = temp;
    
    return head;
};
