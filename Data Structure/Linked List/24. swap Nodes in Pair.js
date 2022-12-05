// * Medium
// https://leetcode.com/problems/swap-nodes-in-pairs/
// 홀수 짝수, 짝을 짓는 노드끼리 순서를 바꿔주는 문제 

// * disscusion
// 읽어보면 앎
const go = (head) => {
    if(!head || !head.next) {
        return head;
    }
    
    const prev = head;
    const center = head.next;
    const next = center.next;

    center.next = prev;
    prev.next = go(next);
    return center;
}

// * Mine 
// 예외 처리를 너무 많이 한다... 쓸애기 알고리즘 
 var swapPairs = function(head) {
    let len = 0;
    let list = head;
    
    while (list) {
        len += 1; // linked List의 길이
        list = list.next;
    }
    
    list = head; // 다시 list = head로 초기화 
    let listCount = 1; 
    
    if (len % 2 !== 0) {
        len -= 1; // 홀수 길이의 배열인 경우 마지막 노드는 바뀌지 않으므로 len - 1
    }
    
    while (len >= 2) {
        let prev = head;
        const center = prev.next;
        
        if(len === 2) {
            prev.next = center.next;
            center.next = prev;
            head = center;
            break;
        }

        
        if(listCount === len - 2) {
            prev.next = center.next;
            center.next = center.next.next;
            prev = prev.next;
            prev.next = center;
            len -= 2;
            listCount = 1;
            list = head;
            
            continue;
        }
        
        list = list.next;
        listCount += 1;
    }
    
    return head;
};